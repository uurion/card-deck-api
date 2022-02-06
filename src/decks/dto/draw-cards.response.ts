import { ApiProperty } from '@nestjs/swagger';
import { CardItem } from './card-item';

export class DrawCardsResponse {
  @ApiProperty({ type: CardItem, isArray: true })
  cards?: CardItem[];
}
