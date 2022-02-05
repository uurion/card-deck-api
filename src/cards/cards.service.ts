import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardType } from './card-type.entity';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(CardType)
    private cardTypesRepository: Repository<CardType>,
  ) {}

  public async getCardTypes(): Promise<CardType[]> {
    return await this.cardTypesRepository.find();
  }
}
