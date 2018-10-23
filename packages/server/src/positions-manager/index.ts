import storedPositions from './stored/positions.json';
import { IPosition } from './typings';

export const positionsManager = {
  get(): Promise<IPosition[]> {
    return Promise.resolve(storedPositions.positions);
  },
};
