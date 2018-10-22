import React from 'react';
import {
  WithStyles, withStyles, createStyles, Theme,
} from '@material-ui/core';
import { JobsDataTable } from 'client/src/view/container/jobs-data-table';
import { SecondaryRoutings } from 'client/src/view/container/secondary-routings';
import { MainRoute } from 'client/src/view/component/common/main-route';
import { Add } from 'client/src/view/component/common/button/add';

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
        Hello Boilerplate :)
      </div>
    </MainRoute>
  ),
);
