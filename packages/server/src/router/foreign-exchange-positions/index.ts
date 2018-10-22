import { Router } from 'express';
import { ratesManager } from 'src/rates-manager';

export const foreignExchangePositionsRouter = Router();

foreignExchangePositionsRouter.get('/', (req, res) => {
  ratesManager.get().then((rates) => {
    res.json([
      {
        id: '1',
        name: 'Omer Test',
        notionalValue: 3,
        rate: rates.EUR,
        currency: 'EUR',
        calculatedValue: 15,
      },
    ]);
  });
});
