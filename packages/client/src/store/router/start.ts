import { loggerPlugin, createRouter } from 'router5';
import browserPlugin from 'router5/plugins/browser';
import { ERouteType } from 'client/src/config/router/type';
import { routes } from 'client/src/store/router/routes';
import { mobxPlugin, RouterStore } from 'mobx-router5';

export const start = (routerStore: RouterStore) => {
  const router = createRouter(routes, { defaultRoute: ERouteType.home })
    .usePlugin(mobxPlugin(routerStore))
    .usePlugin(browserPlugin({ useHash: true }));

  if (__DEV__) {
    router.usePlugin(loggerPlugin);
    (window as any).routerStore = routerStore;
  }

  router.start((err) => {
    if (err) {
      console.log('Could not start router', err);
    }
  });
};
