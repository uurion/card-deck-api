import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { CardType } from '../cards/card-type.entity';

const cardValues = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'JACK',
  'QUEEN',
  'KING',
  'ACE',
];

const longDeckValues = ['2', '3', '4', '5'];

const cardSuits = ['HEARTS', 'SPADES', 'CLUBS', 'DIAMONDS'];

const cartesian = (...a) =>
  a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));

export default class CreateCardTypes implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const values = cartesian(cardSuits, cardValues).map(
      ([suit, value]: string[], index: number) => ({
        suit,
        value,
        index,
        code: value[0] + suit[0],
        belongsToShortDeck: !longDeckValues.includes(value),
      }),
    );

    await connection
      .createQueryBuilder()
      .insert()
      .into(CardType)
      .values(values)
      .execute();
  }
}
