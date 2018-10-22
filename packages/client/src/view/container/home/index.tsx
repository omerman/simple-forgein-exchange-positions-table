import React from 'react';
import {
  WithStyles, withStyles, createStyles, Theme,
} from '@material-ui/core';
import { MainRoute } from 'client/src/view/component/common/main-route';
import { Add } from 'client/src/view/component/common/button/add';
import { ForeginExchangePositionTable } from 'client/src/view/container/home/forgein-exchange-position-table';

const styles = (theme: Theme) => createStyles({
  bottomActions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomActionsSection: {
    display: 'flex',
  },
});

export type HomeProps = WithStyles<typeof styles>;


export const Home = withStyles(styles)(
  ({ classes }: HomeProps) => (
    <MainRoute>
      <div>
        <ForeginExchangePositionTable />
      </div>
    </MainRoute>
  ),
);
