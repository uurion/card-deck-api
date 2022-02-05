import { Controller, Get } from '@nestjs/common';
import { Card } from './card.entity';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  async getAllCards(): Promise<Card[]> {
    return await this.cardsService.getAllCards();
  }
}
