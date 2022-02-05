import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Card } from '../cards/card.entity';
import { UtilFunctions } from '../common/util-functions';
import { cardSuits, cardValues, longDeckCards } from '../domain-constants';

export default class CreateCards implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const values = UtilFunctions.cartesian(cardSuits, cardValues).map(
      ([suit, value]: string[], index: number) => ({
        suit,
        value,
        index,
        code: value[0] + suit[0],
        belongsToShortDeck: !longDeckCards.includes(value),
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
