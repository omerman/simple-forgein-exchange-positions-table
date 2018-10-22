import React, { Component } from 'react';
import {
  TableRow,
  Tooltip,
  TableSortLabel, TableCell, TableHead as MaterialTableHead, WithStyles, createStyles, withStyles, Theme,
} from '@material-ui/core';
import {
  ITableHeadRow, TTableHeadRowKey, TOnOrderChange, TSortDirection,
} from 'client/src/view/component/common/table/typings';

const styles = (theme: Theme) => createStyles({
  row: {
    display: 'flex',
  },
  header: {
    backgroundColor: theme.palette.secondary.light,
    flexBasis: 0,
    flexGrow: 1,
    overflowX: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 30px',
  },
});

export interface TableHeadProps extends WithStyles<typeof styles> {
  rows: ITableHeadRow[],
  orderBy?: TTableHeadRowKey,
  orderDirection: TSortDirection,
  onOrderChange: TOnOrderChange,
}

class TableHeadClass extends Component<TableHeadProps> {
  render() {
    const {
      rows, orderBy, orderDirection, onOrderChange, classes,
    } = this.props;

    return (
      <MaterialTableHead component="div">
        <TableRow component="div" className={classes.row}>
          {rows.map(row => (
            <TableCell
              key={row.key}
              sortDirection={row.key === orderBy ? orderDirection : false}
              component="div"
              className={classes.header}
            >
              <Tooltip
                title="Sort"
                placement="bottom-start"
                enterDelay={300}
              >
                <TableSortLabel
                  active={row.key === orderBy}
                  direction={orderDirection}
                  onClick={() => onOrderChange(row.key)}
                >
                  {row.label}
                </TableSortLabel>
              </Tooltip>
            </TableCell>
          ))}
        </TableRow>
      </MaterialTableHead>
    );
  }
}

export const TableHead = withStyles(styles)(TableHeadClass);
