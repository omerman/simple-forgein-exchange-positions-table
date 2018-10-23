import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MobxHoc } from 'src/view/provider/mobx-react/hoc';
import { ERouteType } from 'client/src/config/router/type';
import { routeComponent } from 'client/src/config/router/route-component';

interface IRouterProps {
  isReady: () => boolean,
  selectedRouteType: () => ERouteType,
}

export const Router = MobxHoc<IRouterProps>(
  ({ store }) => ({
    isReady: () => store.isReady,
    selectedRouteType: () => store.router.routeType,
  }),
)(({ isReady, selectedRouteType }) => {
  if (!isReady()) {
    return (
      <div // Can be extracted to a neat component, but it is a simple loader so..
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress
          color="primary"
          size={100}
        />
      </div>
    );
  }

  const RouteComponent = routeComponent[selectedRouteType()];

  return <RouteComponent />;
});
