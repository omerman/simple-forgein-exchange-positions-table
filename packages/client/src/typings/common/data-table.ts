export type IOrderDirection = 'asc' | 'desc';
export interface IGetDataOptions<T> {
  page: number,
  rowsPerPage: number,
  orderBy?: keyof T,
  orderDirection?: IOrderDirection,
  searchPhrase?: string,
}

export interface IDataTable<T> {
  getTotalCount: () => Promise<number>;
  getData: (options: IGetDataOptions<T>) => Promise<T[]>;
}
