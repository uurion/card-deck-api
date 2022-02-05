export const longDeckCards = ['2', '3', '4', '5'];

export const shortDeckCards = [
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

export const cardValues = [...longDeckCards, ...shortDeckCards];

export const cardSuits = ['HEARTS', 'SPADES', 'CLUBS', 'DIAMONDS'];

export type DeckType = 'SHORT' | 'FULL';
