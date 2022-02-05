import { Card } from '../cards/card.entity';
import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { Deck } from './deck.entity';

@Entity('card_deck')
export class CardToDeck {
  @PrimaryColumn()
  cardCode!: string;

  @PrimaryColumn()
  deckId!: string;

  @Column()
  order?: number;

  @ManyToOne(() => Card, (card) => card.cardsToDecks)
  card!: Card;

  @ManyToOne(() => Deck, (deck) => deck.cardsToDecks)
  deck!: Deck;
}
