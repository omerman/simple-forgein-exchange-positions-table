import React, { Component } from 'react';
import {
  createStyles, WithStyles, withStyles,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { TOnValueChange } from 'client/src/view/component/common/search-bar/typings';
import { Input } from 'client/src/view/component/common/search-bar/input';

const styles = createStyles({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  input: {},
});

interface SearchBarProps extends WithStyles<typeof styles> {
  value: string;
  onValueChange: TOnValueChange;
}

class SearchBarClass extends Component<SearchBarProps> {
  render() {
    const {
      classes,
      value,
      onValueChange,
    } = this.props;

    return (
      <div className={classes.root}>
        <SearchIcon />
        <Input
          defaultValue={value}
          onChange={(e) => { onValueChange(e.target.value); }}
          type="search"
          classes={{
            input: classes.input,
          }}
        />
      </div>
    );
  }
}

export const SearchBar = withStyles(styles)(SearchBarClass);
