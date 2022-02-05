import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Deck } from './deck.entity';
import { DecksService } from './decks.service';
import { CreateDeckRequest } from './dto/create-deck.request';
import { DrawCardsRequest } from './dto/draw-cards.request';
import { DrawCardsResponse } from './dto/draw-cards.response';
import { OpenDeckResponse } from './dto/open-deck.response';

@Controller('decks')
export class DecksController {
  constructor(private readonly decksService: DecksService) {}
  @Get()
  async getAllDecks(): Promise<Deck[]> {
    return await this.decksService.getDecks();
  }

  @Get(':id')
  async getDecks(@Param('id') id: string): Promise<OpenDeckResponse> {
    return await this.decksService.getDeck(id);
  }

  @Post()
  async createDeck(@Body() request: CreateDeckRequest): Promise<Deck> {
    return await this.decksService.createDeck(request);
  }

  @Post(':deckId/draw/:count')
  async drawCards(
    @Param() request: DrawCardsRequest,
  ): Promise<DrawCardsResponse> {
    return await this.decksService.drawCards(request);
  }
}
