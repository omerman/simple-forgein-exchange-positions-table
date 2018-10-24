import React from 'react';
import { Table } from 'client/src/view/component/common/table';
import {
  TOnOrderChange,
  TOnPageChange,
  TSortDirection,
  TOnToggleFilter,
  TTableHeadRowKey,
  TOnRowsPerPageChange,
} from 'client/src/view/component/common/table/typings';
import { TableDataRow } from 'client/src/view/component/common/table/table-data-row';
import { TableDataCell } from 'client/src/view/component/common/table/table-data-cell';
import { TOnValueChange as TOnSearch } from 'client/src/view/component/common/search-bar/typings';
import { IForgeinExchangePosition } from 'server/dist/sharedTypings';
import { headers } from './headers';

export interface IForgeinExchangePositionTableProps {
  data: IForgeinExchangePosition[];
  page: number;
  orderBy: keyof IForgeinExchangePosition;
  orderDirection: TSortDirection;
  rowsPerPage: number;
  totalRows: number;
  searchPhrase;
  hiddenFields: TTableHeadRowKey[];
  onOrderChange: TOnOrderChange;
  onPageChange: TOnPageChange;
  onToggleFilter: TOnToggleFilter;
  onSearch: TOnSearch;
  onRowsPerPageChange: TOnRowsPerPageChange;
}


export const ForgeinExchangePositionTable = (
  props: IForgeinExchangePositionTableProps,
) => {
  const {
    data = [],
    hiddenFields,
    orderBy,
    orderDirection,
    page,
    rowsPerPage,
    totalRows,
    searchPhrase,
    onOrderChange,
    onPageChange,
    onToggleFilter,
    onSearch,
    onRowsPerPageChange,
  } = props;

  return (
    <Table
      headers={headers}
      hiddenFields={hiddenFields}
      orderDirection={orderDirection}
      orderBy={orderBy}
      page={page}
      rowsPerPage={rowsPerPage}
      totalRows={totalRows}
      searchPhrase={searchPhrase}
      onOrderChange={onOrderChange}
      onPageChange={onPageChange}
      onToggleFilter={onToggleFilter}
      onSearch={onSearch}
      onRowsPerPageChange={onRowsPerPageChange}
      exportHref="/api/fxp/export-to-excel"
    >
      {
        data.map(item => (
          <TableDataRow
            key={item.id}
          >
            {
              Object.entries(item)
                .filter(([key]) => (
                  hiddenFields.indexOf(key) === -1 &&
                  Boolean(headers.find(header => header.key === key))
                ))
                .map(([key, value]) => (
                  <TableDataCell key={key}>
                    {value}
                  </TableDataCell>
                ))
            }
          </TableDataRow>
        ))
      }
    </Table>
  );
};
