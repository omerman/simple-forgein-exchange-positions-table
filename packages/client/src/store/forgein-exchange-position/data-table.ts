import { DataTableStore } from 'client/src/store/common/data-table';
import { LocalDataTable } from 'client/src/common/local-data-table';
import { getForgeinExchangePositions } from 'client/src/integration/get-forgein-exchange-positions';
import { IForgeinExchangePosition } from 'server/dist/sharedTypings';

export class ForgeinExchangePositionTableStore
  extends DataTableStore<IForgeinExchangePosition> {

  constructor(page: number = 0, rowsPerPage: number = 25) {
    super(
      new LocalDataTable({
        fetch: () => getForgeinExchangePositions(),
      }),
      {
        page,
        rowsPerPage,
      },
    );
  }
}
