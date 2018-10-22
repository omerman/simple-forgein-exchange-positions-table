import { IDataTable, IGetDataOptions, IOrderDirection } from 'client/src/typings/common/data-table';
import { promiseWrap, PromiseWrap } from 'client/src/common/promise-wrap';

export type TLocalDataTableOptions<T> = {
  fetch: () => Promise<T[]>,
};

export class LocalDataTable<T> implements IDataTable<T> {
  private options: TLocalDataTableOptions<T>;

  private localDataPromise: PromiseWrap<T[]>;

  private currentSearchPhrase: string;

  constructor(options: TLocalDataTableOptions<T>) {
    this.options = options;
  }

  async getData({
    page,
    rowsPerPage,
    orderBy,
    orderDirection,
    searchPhrase,
  }: IGetDataOptions<T>): Promise<T[]> {
    if (!this.localDataPromise) {
      this.localDataPromise = promiseWrap(this.options.fetch());
    }

    const [err, data] = await this.localDataPromise;

    if (err) {
      this.localDataPromise = undefined;
      throw err;
    }

    this.currentSearchPhrase = searchPhrase;

    return (
      LocalDataTable.slice(
        LocalDataTable.sort(
          LocalDataTable.search(data, searchPhrase),
          orderBy,
          orderDirection,
        ),
        page,
        rowsPerPage,
      )
    );
  }

  async getTotalCount(): Promise<number> {
    if (!this.localDataPromise) {
      return 0;
    }

    const [err, data] = await this.localDataPromise;

    if (err) {
      throw err;
    }

    const dataAfterSearch = LocalDataTable.search(data, this.currentSearchPhrase);
    return dataAfterSearch.length;
  }

  private static slice<T>(data: T[], page: number, rowsPerPage: number) {
    const startFrom = page * rowsPerPage;
    return data.slice(startFrom, startFrom + rowsPerPage);
  }

  private static sort<T>(data: T[], orderBy: keyof T, orderDirection: IOrderDirection = 'asc') {
    if (orderBy === undefined) {
      return data;
    }
    return data.sort((a, b) => LocalDataTable.compare(a[orderBy], b[orderBy], orderDirection));
  }

  private static search<T>(data: T[], phrase: string = '') {
    const trimmedPhrase = phrase.trim();

    if (!trimmedPhrase) {
      return data;
    }

    return data.filter(dataRow => (
      Object.values(dataRow).some(cellValue => (
        String(cellValue).includes(phrase)
      ))
    ));
  }

  private static compare(a, b, orderDirection: IOrderDirection) {
    if (orderDirection === 'asc') {
      return a < b ? -1 : 1;
    } else {
      return a > b ? -1 : 1;
    }
  }
}
