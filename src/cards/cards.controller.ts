import { Controller, Get } from '@nestjs/common';
import { CardType } from './card-type.entity';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  async getCardTypes(): Promise<CardType[]> {
    return await this.cardsService.getCardTypes();
  }
}
