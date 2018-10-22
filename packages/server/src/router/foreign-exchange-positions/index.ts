import { Router } from 'express';

export const foreignExchangePositionsRouter = Router();

foreignExchangePositionsRouter.get('/', (req, res) => {
  res.json([
    {
      id: '1',
      name: 'Omer Test',
      notionalValue: 3,
      rate: 'EUR',
      calculatedValue: 15,
    },
  ]);
});
