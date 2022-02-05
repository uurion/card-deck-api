import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from '../cards/card.entity';
import { UtilFunctions } from '../common/util-functions';
import { Repository } from 'typeorm';
import { CardToDeck } from './card-to-deck.entity';
import { Deck } from './deck.entity';
import { CreateDeckRequest } from './dto/create-deck.request';
import { DrawCardsRequest as DrawCardsRequest } from './dto/draw-cards.request';
import { DrawCardsResponse } from './dto/draw-cards.response';
import { OpenDeckResponse } from './dto/open-deck.response';
import { DeckType } from '../domain-constants';

@Injectable()
export class DecksService {
  constructor(
    @InjectRepository(Deck)
    private readonly decksRepository: Repository<Deck>,
    @InjectRepository(Card)
    private readonly cardsRepository: Repository<Card>,
    @InjectRepository(CardToDeck)
    private readonly cardsToDecksRepository: Repository<CardToDeck>,
  ) {}

  public async getAllDecks(): Promise<Deck[]> {
    return await this.decksRepository.find();
  }

  public async createDeck(
    request: CreateDeckRequest,
  ): Promise<OpenDeckResponse> {
    const allCards = await this.cardsRepository.find();
    const cardsToInclude =
      request.type === 'SHORT'
        ? allCards.filter((x) => x.belongsToShortDeck)
        : allCards;

    const sortedCards = request.shuffled
      ? UtilFunctions.shuffle(cardsToInclude)
      : cardsToInclude;

    const createdDeck = await this.decksRepository.save({
      type: request.type,
      shuffled: request.shuffled,
      cardsToDecks: sortedCards.map((x: Card, index: number) => ({
        cardCode: x.code,
        order: index,
      })),
    });

    return {
      deckId: createdDeck.id,
      type: createdDeck.type,
      shuffled: createdDeck.shuffled,
      remaining: createdDeck.cardsToDecks.length,
    };
  }

  public async getDeck(id: string): Promise<OpenDeckResponse> {
    const deckWithCards = await this.decksRepository
      .createQueryBuilder('deck')
      .leftJoinAndSelect('deck.cardsToDecks', 'cardsToDecks')
      .leftJoinAndSelect('cardsToDecks.card', 'card')
      .where('deck.id = :id', { id })
      .orderBy('cardsToDecks.order', 'ASC')
      .getOne();

    return {
      deckId: deckWithCards.id,
      type: deckWithCards.type as DeckType,
      shuffled: deckWithCards.shuffled,
      remaining: deckWithCards.cardsToDecks.length,
      cards: deckWithCards.cardsToDecks.map(({ card }) => ({
        value: card.value,
        suit: card.suit,
        code: card.code,
      })),
    };
  }

  public async drawCards(
    request: DrawCardsRequest,
  ): Promise<DrawCardsResponse> {
    const cardsToDraw = await this.cardsToDecksRepository
      .createQueryBuilder('cardsToDecks')
      .leftJoinAndSelect('cardsToDecks.card', 'card')
      .where('cardsToDecks.deckId = :deckId', { deckId: request.deckId })
      // draw cards from the top of the deck
      .orderBy('cardsToDecks.order', 'DESC')
      .take(request.count)
      .getMany();

    const response = {
      cards: cardsToDraw.map(({ card }) => ({
        value: card.value,
        suit: card.suit,
        code: card.code,
      })),
    };

    await this.cardsToDecksRepository.remove(cardsToDraw);
    return response;
  }
}
