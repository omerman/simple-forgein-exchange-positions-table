import React from 'react';
import { MobxHoc } from 'src/view/provider/mobx-react/hoc';
import { ERouteType } from 'client/src/config/router/type';
import { routeComponent } from 'client/src/config/router/route-component';

interface IRouterProps {
  isReady: () => boolean,
  selectedRouteType: () => ERouteType,
}

export const Router = MobxHoc<IRouterProps>(
  ({ store }) => ({
    isReady: () => store.router.isStarted(),
    selectedRouteType: () => store.router.routeType,
  }),
)(({ isReady, selectedRouteType }) => {
  if (!isReady()) {
    return null;
  }

  const RouteComponent = routeComponent[selectedRouteType()];

  return <RouteComponent />;
});
