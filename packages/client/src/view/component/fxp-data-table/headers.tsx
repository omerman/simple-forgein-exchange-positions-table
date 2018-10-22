import { ITableHeadRow } from 'client/src/view/component/common/table/typings';
import { IForgeinExchangePosition } from 'client/src/typings/forgein-exchange-position';

interface IHeader extends ITableHeadRow {
  key: keyof IForgeinExchangePosition,
}

export const headers: IHeader[] = [
  {
    key: 'name',
    label: 'Financial Unit Name',
  },
  {
    key: 'notionalValue',
    label: 'Notional Value',
  },
  {
    key: 'rate',
    label: 'Rate',
  },
  {
    key: 'currency',
    label: 'Currency',
  },
  {
    key: 'calculatedValue',
    label: 'Calculated Value (in USD)',
  },
];
