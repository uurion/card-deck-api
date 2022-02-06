import { ApiProperty } from '@nestjs/swagger';
import { CardItem } from './card-item';

export class OpenDeckResponse {
  @ApiProperty({ example: '3b9cf1c8-09fe-489d-b1eb-5ab8b6460ef6' })
  deckId!: string;

  @ApiProperty({ examples: ['FULL', 'SHORT'] })
  type!: 'FULL' | 'SHORT';

  @ApiProperty()
  shuffled!: boolean;

  @ApiProperty({ example: 36 })
  remaining!: number;

  @ApiProperty({ type: CardItem, isArray: true })
  cards?: CardItem[];
}
