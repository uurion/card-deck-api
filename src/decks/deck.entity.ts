import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('deck')
export class CardType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  shuffled: boolean;
}
