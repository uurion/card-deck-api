import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Deck } from './deck.entity';
import { DecksService } from './decks.service';
import { CreateDeckRequest } from './dto/create-deck.request';
import { DrawCardsResponse } from './dto/draw-cards.response';
import { OpenDeckResponse } from './dto/open-deck.response';

@Controller('decks')
export class DecksController {
  constructor(private readonly decksService: DecksService) {}

  @Get()
  @ApiResponse({
    status: 201,
    description: 'See all card decks.',
  })
  async getAllDecks(): Promise<Deck[]> {
    return await this.decksService.getAllDecks();
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'Open a Deck to see its properties and content (cards).',
    type: OpenDeckResponse,
  })
  async getDeck(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<OpenDeckResponse> {
    return await this.decksService.getDeck(id);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Create a new Deck with specified properties.',
    type: OpenDeckResponse,
  })
  async createDeck(
    @Body() request: CreateDeckRequest,
  ): Promise<OpenDeckResponse> {
    return await this.decksService.createDeck(request);
  }

  @Post(':deckId/draw/:count')
  @ApiResponse({
    status: 201,
    description: 'Draw one or more cards.',
    type: DrawCardsResponse,
  })
  async drawCards(
    @Param('deckId', ParseUUIDPipe) deckId: string,
    @Param('count', ParseIntPipe) count: number,
  ): Promise<DrawCardsResponse> {
    const drawCardsRequest = { deckId, count };
    return await this.decksService.drawCards(drawCardsRequest);
  }
}
