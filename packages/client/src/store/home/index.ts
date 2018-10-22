import { ForgeinExchangePositionTableStore } from 'client/src/store/forgein-exchange-position/data-table';

export class HomeStore {
  public readonly fxDataTable: ForgeinExchangePositionTableStore;

  constructor() {
    this.fxDataTable = new ForgeinExchangePositionTableStore();
  }
}
