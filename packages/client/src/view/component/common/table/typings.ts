export type TTableHeadRowKey = string;

export type TSortDirection = 'asc' | 'desc';

export type TOnOrderChange = (orderBy: TTableHeadRowKey) => void;

export type TOnPageChange = (index: number) => void;

export type TOnToggleFilter = (key: TTableHeadRowKey) => void;

export type IFilter = { key: TTableHeadRowKey, label: string, hidden: boolean };

export type TOnRowsPerPageChange = (rowsPerPage: number) => void;

export interface ITableHeadRow {
  key: TTableHeadRowKey;
  label: string;
}
