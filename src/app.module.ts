import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsModule } from './cards/cards.module';
import { DecksModule } from './decks/decks.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CardsModule, DecksModule],
})
export class AppModule {}
