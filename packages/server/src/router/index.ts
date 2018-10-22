import { Router } from 'express';
import { foreignExchangePositionsRouter } from 'src/router/foreign-exchange-positions';

const mainRouter = Router();
mainRouter.use('/fxp', foreignExchangePositionsRouter);

export { mainRouter };
