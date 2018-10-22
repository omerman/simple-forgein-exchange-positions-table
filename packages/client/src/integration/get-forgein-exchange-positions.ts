import { IForgeinExchangePosition } from 'client/src/typings/forgein-exchange-position';

export const getForgeinExchangePositions = (): Promise<IForgeinExchangePosition[]> => (
  Promise.resolve([
    {
      id: '1',
      name: 'Omer Test',
      notionalValue: 3,
      rate: 'EUR',
      calculatedValue: 15,
    },
  ])
);
