import { CardItem } from './card-item';

export class OpenDeckResponse {
  deckId!: string;
  type!: 'FULL' | 'SHORT';
  shuffled!: boolean;
  remaining!: number;
  cards?: CardItem[];
}
