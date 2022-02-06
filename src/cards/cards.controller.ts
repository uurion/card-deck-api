import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Card } from './card.entity';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  @ApiResponse({
    status: 201,
    description: 'Get all possible cards.',
  })
  async getAllCards(): Promise<Card[]> {
    return await this.cardsService.getAllCards();
  }
}
