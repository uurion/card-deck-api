import { ApiProperty } from '@nestjs/swagger';

export class CardItem {
  @ApiProperty({ example: 'ACE' })
  value!: string;

  @ApiProperty({ example: 'HEARTS' })
  suit!: string;

  @ApiProperty({ example: 'AH' })
  code!: string;
}
