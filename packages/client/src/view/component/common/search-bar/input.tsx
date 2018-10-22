import React, { Component } from 'react';
import {
  Input as MaterialInput, createStyles, WithStyles, withStyles,
} from '@material-ui/core';
import { InputProps as MaterialInputProps } from '@material-ui/core/Input';

const transitionWidth = 15;
const width = 200;

const styles = createStyles({
  root: {
    height: '100%',
    '&:before, &:after': {
      borderBottom: 'none !important',
    },
  },
  input: {
    width: `${width}px`,
    position: 'relative',
    left: 0,
    padding: '0 2px',
    height: '100%',
    transition: 'width .5s',
    '&:focus': {
      width: `${width + transitionWidth}px`,
    },
  },
});

type SearchBarProps = MaterialInputProps & WithStyles<typeof styles>;

class InputClass extends Component<SearchBarProps> {
  render() {
    const {
      classes,
      ...otherProps
    } = this.props;

    return <MaterialInput classes={classes} {...otherProps} />;
  }
}

export const Input = withStyles(styles)(InputClass);
