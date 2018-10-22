import { Router } from 'express';

export const foreignExchangeRouter = Router();

foreignExchangeRouter.post('/', (req, res) => {
  res.end();
});
