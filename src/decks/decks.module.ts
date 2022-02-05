import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from '../cards/card.entity';
import { CardToDeck } from './card-to-deck.entity';
import { Deck } from './deck.entity';
import { DecksController } from './decks.controller';
import { DecksService } from './decks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Deck, CardToDeck, Card])],
  controllers: [DecksController],
  providers: [DecksService],
})
export class DecksModule {}
