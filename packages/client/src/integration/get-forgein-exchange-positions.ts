import { IForgeinExchangePosition } from 'server/dist/sharedTypings';

export const getForgeinExchangePositions = (): Promise<IForgeinExchangePosition[]> => (
  // Assuming there are no errors in the world offcourse.
  fetch('api/fxp/').then(response => response.json())
);
