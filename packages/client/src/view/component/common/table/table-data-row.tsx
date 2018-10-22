import React, { Component, MouseEvent } from 'react';
import {
  TableRow as MaterialTableRow, createStyles, WithStyles, withStyles,
} from '@material-ui/core';
import classNames from 'classnames';
import { TableRowProps as MaterialTableRowProps } from '@material-ui/core/TableRow';

const styles = createStyles({
  row: {
    display: 'flex',
  },
  clickableRow: {
    cursor: 'pointer',
  },
});

interface TableDataRowBaseProps extends WithStyles<typeof styles> {
  onClick?: (e: MouseEvent<HTMLTableRowElement>) => void;
}

export type TableDataRowProps = MaterialTableRowProps & TableDataRowBaseProps;

class TableDataRowClass extends Component<TableDataRowProps> {
  render() {
    const {
      children,
      onClick,
      classes,
      ...otherProps
    } = this.props;

    return (
      <MaterialTableRow
        component="div"
        hover
        tabIndex={-1}
        onClick={onClick}
        className={classNames(classes.row, { [classes.clickableRow]: onClick })}
        {...otherProps}
      >
        {children}
      </MaterialTableRow>
    );
  }
}

export const TableDataRow = withStyles(styles)(TableDataRowClass);
