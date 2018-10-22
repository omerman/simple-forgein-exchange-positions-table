import React from 'react';
import { MobxHoc } from 'client/src/view/provider/mobx-react/hoc';
import { ERouteType } from 'client/src/config/router/type';
import { TNavigate } from 'client/src/store/router';
import { TopBar as TopBarComponent } from '../component/top-bar/index';

interface ITopBarProps {
  getSelectedRouteType: () => ERouteType;
  navigate: TNavigate;
}

export const TopBar = MobxHoc<ITopBarProps>(
  ({ store }) => ({
    getSelectedRouteType: () => store.router.routeType,
    navigate: store.router.navigate,
  }),
)(({ getSelectedRouteType, navigate }) => (
  <TopBarComponent
    selectedRouteType={getSelectedRouteType()}
    onPathChange={navigate}
  />
));
