import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardType } from './card-type.entity';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';

@Module({
  imports: [TypeOrmModule.forFeature([CardType])],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
