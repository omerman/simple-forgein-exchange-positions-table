import React from 'react';
import { MobxHoc } from 'src/view/provider/mobx-react/hoc';
import { IForgeinExchangePosition } from 'client/src/typings/forgein-exchange-position';

interface IForeginExchangePositionTableProps {
  data: IForgeinExchangePosition[],
}

export const ForeginExchangePositionTable = MobxHoc<IForeginExchangePositionTableProps>(
  ({ store }) => ({
    data: store.home.fxDataTable.data,
  }),
)(({ data }) => {
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
});
