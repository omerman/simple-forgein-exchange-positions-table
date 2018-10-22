import React, { Component } from 'react';
import {
  TableRow as MaterialTableCell, createStyles, WithStyles, withStyles,
} from '@material-ui/core';
import { TableRowBaseProps } from '@material-ui/core/TableRow';

const styles = createStyles({
  cell: {
    flexGrow: 1,
    flexBasis: 0,
    overflowX: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 30px',
  },
});

interface TableDataCellProps extends TableRowBaseProps, WithStyles<typeof styles> {

}

class TableDataCellClass extends Component<TableDataCellProps> {
  render() {
    const {
      children,
      classes,
      ...otherProps
    } = this.props;

    return (
      <MaterialTableCell
        component="div"
        className={classes.cell}
        {...otherProps}
      >
        {children}
      </MaterialTableCell>
    );
  }
}

export const TableDataCell = withStyles(styles)(TableDataCellClass);
