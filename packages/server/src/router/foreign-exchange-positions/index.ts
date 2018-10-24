import { Router } from 'express';
import { foreignExchangePositionsManager } from 'src/forgein-exchange-positions-manager';
import { IForgeinExchangePosition } from 'src/shared-typings';
import { toExcelSheet } from 'src/forgein-exchange-positions-manager/to-excel-sheet';

export const foreignExchangePositionsRouter = Router();

foreignExchangePositionsRouter.get('/', async (req, res) => {
  const fxPositions = await foreignExchangePositionsManager.get();
  res.json(fxPositions);
});

foreignExchangePositionsRouter.get('/export-to-excel', async (req, res) => {
  const fxPositions = await foreignExchangePositionsManager.get();

  const sheet = toExcelSheet(fxPositions);

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', `attachment; filename=${sheet.name}.xlsx`);

  await sheet.workbook.xlsx.write(res);

  res.end();
});
