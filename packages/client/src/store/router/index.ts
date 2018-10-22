import { RouterStore as Router5RouterStore } from 'mobx-router5';
import { Route, Params } from 'router5';
import { observable, runInAction } from 'mobx';
import { ERouteType } from 'client/src/config/router/type';
import { start } from 'client/src/store/router/start';

export type TNavigate = (toRoute: string, params?: Params) => void;

export class RouterStore extends Router5RouterStore {
  @observable
  public routeType: ERouteType;

  @observable
  public previousRouteType: ERouteType;

  constructor() {
    super();
    start(this);
  }

  onTransitionSuccess = (route: Route) => {
    runInAction(() => {
      this.previousRouteType = this.routeType;
      this.routeType = route.name as ERouteType;
    });
  }

  isStarted() {
    return this.router.isStarted();
  }
}
