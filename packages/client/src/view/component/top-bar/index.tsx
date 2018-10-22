import React, { PureComponent } from 'react';
import {
  withStyles, createStyles, WithStyles, Theme,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { ERouteType } from 'client/src/config/router/type';

const height = 50;

const styles = (theme: Theme) => createStyles({
  root: {
    minHeight: height,
  },
  appBar: {
  },
  appBarContent: {
    minHeight: height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.typography.headline.fontSize,
    fontFamily: theme.typography.headline.fontFamily,
  },
  logo: {
  },
});

interface TopBarProps extends WithStyles<typeof styles> {
  selectedRouteType: ERouteType,
  onPathChange: (path: ERouteType) => void,
}
class TopBarClass extends PureComponent<TopBarProps> {
  render() {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <div className={classes.appBarContent}>
            Capitolis
          </div>
        </AppBar>
      </div>
    );
  }
}

export const TopBar = withStyles(styles)(TopBarClass);
