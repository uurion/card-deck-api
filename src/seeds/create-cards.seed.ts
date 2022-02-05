import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Card } from '../cards/card.entity';
import { UtilFunctions } from 'src/common/util-functions';

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

export default class CreateCards implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const values = UtilFunctions.cartesian(cardSuits, cardValues).map(
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
      .into(Card)
      .values(values)
      .execute();
  }
}
