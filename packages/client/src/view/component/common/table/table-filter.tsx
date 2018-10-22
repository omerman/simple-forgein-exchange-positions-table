import React, { Component, MouseEvent } from 'react';
import {
  createStyles, WithStyles, withStyles, Tooltip, IconButton, Menu, MenuItem, Checkbox, Typography,
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import { IFilter, TOnToggleFilter } from 'client/src/view/component/common/table/typings';
import { observable } from 'mobx';
import { Observer } from 'mobx-react';

const styles = createStyles({
  root: {

  },
  filter: {
    cursor: 'default',
  },
});

interface TableFilterProps extends WithStyles<typeof styles> {
  onToggleFilter: TOnToggleFilter,
  filters: IFilter[],
}

class TableFilterClass extends Component<TableFilterProps> {
  localMenuState = observable({
    open: false,
    anchor: (undefined as HTMLElement),
  });

  private openMenu = (event: MouseEvent<HTMLElement>) => {
    this.localMenuState.open = true;
    this.localMenuState.anchor = event.currentTarget;
  }

  private closeMenu = () => {
    this.localMenuState.open = false;
  };

  renderFilters() {
    const { classes, filters, onToggleFilter } = this.props;

    return filters.map(filter => (
      <MenuItem key={filter.key} className={classes.filter} disableRipple>
        <Checkbox
          indeterminate
          checked={!filter.hidden}
          onChange={() => onToggleFilter(filter.key)}
          value={filter.key}
          color="primary"
        />
        <Typography>
          {filter.label}
        </Typography>
      </MenuItem>
    ));
  }

  render() {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.root}>
        <Tooltip title="Filter list">
          <IconButton aria-label="Filter list" onClick={this.openMenu}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        <Observer>
          {
            () => (
              <Menu
                anchorEl={this.localMenuState.anchor}
                open={this.localMenuState.open}
                onClose={this.closeMenu}
              >
                {this.renderFilters()}
              </Menu>
            )
          }
        </Observer>
      </div>
    );
  }
}

export const TableFilter = withStyles(styles)(TableFilterClass);
