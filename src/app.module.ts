import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { DecksModule } from './decks/decks.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CardsModule, DecksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
