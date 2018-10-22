import { observable, computed, action } from 'mobx';
import { promisedComputed } from 'computed-async-mobx';
import { IDataTable, IOrderDirection, IGetDataOptions } from 'client/src/typings/common/data-table';

export class DataTableStore<T> {
  @observable
  public page: number;

  @observable
  public rowsPerPage: number;

  @observable
  public orderBy: keyof T;

  @observable
  public orderDirection: IOrderDirection;

  @observable
  public hiddenFields: Array<keyof T>;

  @observable
  public searchPhrase: string;

  protected dataTable: IDataTable<T>;

  protected static initiateDataAndCount = { data: undefined, totalCount: undefined };

  protected dataAndCountPromise = promisedComputed<{ data: T[], totalCount: number }>(
    { data: undefined, totalCount: undefined },
    async () => {
      const data = await (
        this.dataTable.getData({
          page: this.page,
          rowsPerPage: this.rowsPerPage,
          orderBy: this.orderBy,
          orderDirection: this.orderDirection,
          searchPhrase: this.searchPhrase,
        })
      );

      const totalCount = await this.dataTable.getTotalCount();

      return {
        data,
        totalCount,
      };
    },
  );

  constructor(
    dataTable: IDataTable<T>,
    initialGetOptions: IGetDataOptions<T>,
    initialHiddenFields: Array<keyof T> = [],
  ) {
    this.dataTable = dataTable;
    this.page = initialGetOptions.page;
    this.rowsPerPage = initialGetOptions.rowsPerPage;
    this.orderBy = initialGetOptions.orderBy;
    this.orderDirection = initialGetOptions.orderDirection || 'asc';
    this.hiddenFields = initialHiddenFields;
  }

  @computed
  protected get dataAndCount() {
    return this.dataAndCountPromise.get();
  }

  @computed
  get data() {
    return this.dataAndCount.data;
  }

  @computed
  get totalCount() {
    return this.dataAndCount.totalCount;
  }

  @action
  setPage = (page: number) => {
    this.page = page;
  }

  @action
  setOrder = (orderBy: keyof T) => {
    if (orderBy === this.orderBy) {
      const { orderDirection } = this;
      this.orderDirection = orderDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.orderBy = orderBy;
      this.orderDirection = 'asc';
    }
  }

  @action
  toggleHiddenField = (field: keyof T) => {
    const hiddenFieldIndex = this.hiddenFields.indexOf(field);
    if (hiddenFieldIndex !== -1) {
      this.hiddenFields.splice(hiddenFieldIndex, 1);
    } else {
      if (this.orderBy === field) {
        this.setOrder(undefined);
      }
      this.hiddenFields.push(field);
    }
  }

  @action
  setSearchPhrase = (phrase: string) => {
    this.searchPhrase = phrase;
  }

  @action
  setRowsPerPageChange = (rowsPerPage: number) => {
    this.rowsPerPage = rowsPerPage;
  }
}
