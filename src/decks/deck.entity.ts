import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CardToDeck as CardToDeck } from './card-to-deck.entity';

@Entity('deck')
export class Deck {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  shuffled: boolean;

  @OneToMany(() => CardToDeck, (cardToDeck) => cardToDeck.deck, {
    cascade: true,
  })
  cardsToDecks: CardToDeck[];
}
