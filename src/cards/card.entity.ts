import { CardToDeck } from '../decks/card-to-deck.entity';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

@Entity('card', {
  orderBy: {
    index: 'ASC',
  },
})
export class Card {
  @PrimaryColumn()
  code: string;

  @Column({ unique: true })
  index: number;

  @Column()
  value: string;

  @Column()
  suit: string;

  @Column()
  belongsToShortDeck: boolean;

  @OneToMany(() => CardToDeck, (cardToDeck) => cardToDeck.card)
  public cardsToDecks: CardToDeck[];
}
