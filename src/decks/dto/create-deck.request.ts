import { ApiProperty } from '@nestjs/swagger';
import { DeckType } from '../../domain-constants';

export class CreateDeckRequest {
  @ApiProperty({ examples: ['FULL', 'SHORT'] })
  type!: DeckType;

  @ApiProperty()
  shuffled!: boolean;
}
