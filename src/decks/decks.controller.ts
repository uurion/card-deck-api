import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { Deck } from './deck.entity';
import { DecksService } from './decks.service';
import { CreateDeckRequest } from './dto/create-deck.request';
import { DrawCardsResponse } from './dto/draw-cards.response';
import { OpenDeckResponse } from './dto/open-deck.response';

@Controller('decks')
export class DecksController {
  constructor(private readonly decksService: DecksService) {}
  @Get()
  async getAllDecks(): Promise<Deck[]> {
    return await this.decksService.getAllDecks();
  }

  @Get(':id')
  async getDeck(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<OpenDeckResponse> {
    return await this.decksService.getDeck(id);
  }

  @Post()
  async createDeck(
    @Body() request: CreateDeckRequest,
  ): Promise<OpenDeckResponse> {
    return await this.decksService.createDeck(request);
  }

  @Post(':deckId/draw/:count')
  async drawCards(
    @Param('deckId', ParseUUIDPipe) deckId: string,
    @Param('count', ParseIntPipe) count: number,
  ): Promise<DrawCardsResponse> {
    const drawCardsRequest = { deckId, count };
    return await this.decksService.drawCards(drawCardsRequest);
  }
}
