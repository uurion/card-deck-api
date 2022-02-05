import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('card_type', {
  orderBy: {
    index: 'ASC',
  },
})
export class CardType {
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
}
