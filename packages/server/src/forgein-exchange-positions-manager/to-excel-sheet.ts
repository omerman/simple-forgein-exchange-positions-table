import Excel from 'exceljs';
import { IForgeinExchangePosition } from 'src/shared-typings';

export const toExcelSheet = (fxp: IForgeinExchangePosition[]) => {
  const workbook = new Excel.Workbook();
  const sheetName = `exported_${
    new Date().toLocaleDateString(
      'en',
      {
        hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false,
      },
    ).replace(/\D/g, '_').replace(/_+/g, '_')
  }`;
  const sheet = workbook.addWorksheet(sheetName);

  const columns: (Partial<Excel.Column> & { key: keyof IForgeinExchangePosition })[] = [
    {
      header: 'Name',
      key: 'name',
      width: 100,
    },
    {
      header: 'NotionalValue',
      key: 'notionalValue',
      width: 100,
    },
    {
      header: 'Rate',
      key: 'rate',
      width: 100,
    },
    {
      header: 'Currency',
      key: 'currency',
      width: 100,
    },
    {
      header: 'Calculated Value (in USD)',
      key: 'calculatedValue',
      width: 100,
    },
  ];

  sheet.columns = columns;

  sheet.addRows(fxp);

  return sheet;
};
