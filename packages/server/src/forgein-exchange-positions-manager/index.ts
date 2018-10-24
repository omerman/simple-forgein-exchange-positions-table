import { ratesManager } from 'src/rates-manager';
import { finantialUnitsManager } from 'src/finantial-units-manager';
import { positionsManager } from 'src/positions-manager';
import { IForgeinExchangePosition } from 'src/shared-typings';

export const foreignExchangePositionsManager = {
  async get() {
    const [rates, finantialUnits, positions] = await Promise.all([
      ratesManager.get(),
      finantialUnitsManager.get(),
      positionsManager.get(),
    ]);

    const calculatedValue: IForgeinExchangePosition[] = positions.map((position) => {
      const finantialUnit = finantialUnits.find(fu => position.fuOriginId === fu.id);

      return {
        id: position.id,
        name: finantialUnit.name,
        notionalValue: position.data.currency.notionalValue,
        rate: rates[position.data.currency.ccy],
        currency: position.data.currency.ccy,
        calculatedValue: (
          position.data.currency.notionalValue * rates[position.data.currency.ccy]
        ),
      };
    });

    return calculatedValue;
  },
};
