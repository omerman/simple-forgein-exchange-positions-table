import React from 'react';
import { MainRoute } from 'client/src/view/component/common/main-route';
import { ForeginExchangePositionTable } from 'client/src/view/container/home/forgein-exchange-position-table';

export const Home = (
  () => (
    <MainRoute>
      <div>
        <ForeginExchangePositionTable />
      </div>
    </MainRoute>
  )
);
