import { IForgeinExchangePosition } from 'client/src/typings/forgein-exchange-position';

export const getForgeinExchangePositions = (): Promise<IForgeinExchangePosition[]> => (
  // Assuming there are no errors in the world offcourse.
  fetch('api/fxp/').then(response => response.json())
);
