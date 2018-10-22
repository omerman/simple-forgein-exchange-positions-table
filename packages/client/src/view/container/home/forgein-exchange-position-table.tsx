import React from 'react';
import { MobxHoc } from 'src/view/provider/mobx-react/hoc';
import {
  ForgeinExchangePositionTable as ForgeinExchangePositionTableComponent,
  IForgeinExchangePositionTableProps,
} from 'client/src/view/component/fxp-data-table';
import { toJS } from 'mobx';


export const ForeginExchangePositionTable = MobxHoc<IForgeinExchangePositionTableProps>(
  ({ store }) => ({
    data: store.home.fxDataTable.data,
    page: store.home.fxDataTable.page,
    totalRows: store.home.fxDataTable.totalCount,
    rowsPerPage: store.home.fxDataTable.rowsPerPage,
    hiddenFields: toJS(store.home.fxDataTable.hiddenFields),
    orderBy: store.home.fxDataTable.orderBy,
    orderDirection: store.home.fxDataTable.orderDirection,
    searchPhrase: store.home.fxDataTable.searchPhrase,
    onOrderChange: store.home.fxDataTable.setOrder,
    onPageChange: store.home.fxDataTable.setPage,
    onToggleFilter: store.home.fxDataTable.toggleHiddenField,
    onSearch: store.home.fxDataTable.setSearchPhrase,
    onRowsPerPageChange: store.home.fxDataTable.setRowsPerPageChange,
  }),
)((props) => {
  return (
    <div>
      <ForgeinExchangePositionTableComponent
        {...props}
      />
    </div>
  );
});
