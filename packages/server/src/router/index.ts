import { Router } from 'express';
import { foreignExchangeRouter } from 'src/router/foreign-exchange';

const mainRouter = Router();
mainRouter.use('/fx', foreignExchangeRouter);

export { mainRouter };
