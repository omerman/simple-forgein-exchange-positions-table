import storedUnits from './stored/finantial-units.json';
import { IFinantialUnit } from './typings';

export const finantialUnitsManager = {
  get(): Promise<IFinantialUnit[]> {
    return Promise.resolve(storedUnits.finUnits);
  },
};
