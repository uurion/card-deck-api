import { DeckType } from '../../domain-constants';

export class CreateDeckRequest {
  type!: DeckType;
  shuffled!: boolean;
}
