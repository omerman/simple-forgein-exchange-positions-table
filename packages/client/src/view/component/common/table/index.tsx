import React, { Component } from 'react';
import {
  createStyles,
  WithStyles,
  withStyles,
  Paper,
  TablePagination,
  TableBody,
  TableRow,
  Theme,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import MaterialTable from '@material-ui/core/Table';
import classNames from 'classnames';
import { TableHead } from 'client/src/view/component/common/table/table-head';
import {
  ITableHeadRow,
  TSortDirection,
  TTableHeadRowKey,
  TOnOrderChange,
  IFilter,
  TOnToggleFilter,
  TOnPageChange,
  TOnRowsPerPageChange,
} from 'client/src/view/component/common/table/typings';
import ExportIcon from '@material-ui/icons/CloudDownloadSharp';
import { TableFilter } from 'client/src/view/component/common/table/table-filter';
import { SearchBar } from 'client/src/view/component/common/search-bar';
import { TOnValueChange as TOnSearch } from 'client/src/view/component/common/search-bar/typings';

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalContainer: {
    width: '900px',
    maxWidth: '90vw',
  },
  verticalContainer: {
    height: '500px',
  },
  tableDataContainer: {
    overflowY: 'auto',
  },
  table: {
  },
  tableBody: {
    overflowY: 'scroll',
    display: 'block',
  },
  topBarContainer: {
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  searchBarContainer: {
    height: '30px',
    background: theme.palette.secondary.light,
    borderRadius: '4px',
  },
});

interface TableProps extends WithStyles<typeof styles> {
  headers: ITableHeadRow[];
  hiddenFields: string[];
  children: React.ReactElement<typeof TableRow>[];
  orderDirection?: TSortDirection;
  orderBy?: TTableHeadRowKey;
  page: number;
  rowsPerPage: number;
  totalRows: number;
  searchPhrase: string;
  onOrderChange: TOnOrderChange;
  onPageChange: TOnPageChange;
  onToggleFilter: TOnToggleFilter;
  onSearch: TOnSearch;
  onRowsPerPageChange: TOnRowsPerPageChange;
  exportHref?: string;
}

class TableClass extends Component<TableProps> {
  constructFilters(): IFilter[] {
    const { headers, hiddenFields } = this.props;

    return headers.map(header => ({
      key: header.key,
      label: header.label,
      hidden: hiddenFields.indexOf(header.key) !== -1,
    }));
  }

  renderSearchBar() {
    const { classes, searchPhrase, onSearch } = this.props;

    return (
      <div className={classes.searchBarContainer}>
        <SearchBar
          value={searchPhrase}
          onValueChange={value => onSearch(value)}
        />
      </div>
    );
  }

  renderExportIcon() {
    const { exportHref } = this.props;

    if (exportHref) {
      return (
        <Tooltip title="Export to excel">
          <IconButton href={exportHref}>
            <ExportIcon />
          </IconButton>
        </Tooltip>
      );
    } else {
      return null;
    }
  }

  renderTableFilter() {
    const { onToggleFilter } = this.props;

    const filters = this.constructFilters();

    return (
      <TableFilter
        filters={filters}
        onToggleFilter={onToggleFilter}
      />
    );
  }

  renderPagination() {
    const {
      totalRows,
      rowsPerPage,
      page,
      onPageChange,
      onRowsPerPageChange,
      classes,
    } = this.props;

    if (!totalRows) {
      return null;
    }

    return (
      <Paper className={classes.horizontalContainer}>
        <TablePagination
          component="div"
          count={totalRows}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={(e, nextPage) => onPageChange(nextPage)}
          onChangeRowsPerPage={e => onRowsPerPageChange(Number(e.target.value))}
        />
      </Paper>
    );
  }

  render() {
    const { classes } = this.props;
    const {
      headers, children, orderDirection, orderBy, onOrderChange, hiddenFields,
    } = this.props;

    return (
      <div className={classes.root}>
        <div className={classNames(classes.horizontalContainer, classes.topBarContainer)}>
          {this.renderSearchBar()}
          {this.renderTableFilter()}
          {this.renderExportIcon()}
        </div>
        <Paper className={classNames(classes.horizontalContainer, classes.tableDataContainer)}>
          <MaterialTable className={classes.table} aria-labelledby="tableTitle" component="div">
            <TableHead
              rows={headers.filter(header => hiddenFields.indexOf(header.key) === -1)}
              orderBy={orderBy}
              orderDirection={orderDirection}
              onOrderChange={onOrderChange}
            />
            <TableBody component="div" className={classNames(classes.verticalContainer, classes.tableBody)}>
              {children}
            </TableBody>
          </MaterialTable>
        </Paper>
        {this.renderPagination()}
      </div>
    );
  }
}

export const Table = withStyles(styles)(TableClass);
