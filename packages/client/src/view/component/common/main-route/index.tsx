import React from 'react';
import {
  WithStyles, withStyles, createStyles, Theme,
} from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing.unit,
  },
  content: {
    width: '94vw',
  },
});

export interface MainRouteProps extends WithStyles<typeof styles> {
  children: React.ReactNode
}

export const MainRoute = withStyles(styles)(
  ({ children, classes }: MainRouteProps) => (
    <div className={classes.root}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  ),
);
