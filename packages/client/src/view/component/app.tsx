import React, { PureComponent } from 'react';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';

const styles = createStyles({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});

interface AppProps extends WithStyles<typeof styles> {
  children: JSX.Element | JSX.Element[]
}

class AppClass extends PureComponent<AppProps> {
  render() {
    const {
      classes,
      children,
    } = this.props;

    return (
      <div className={classes.root}>
        {children}
      </div>
    );
  }
}

export const App = withStyles(styles)(AppClass);
