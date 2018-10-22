import { RouterStore } from 'client/src/store/router';
import { HomeStore } from 'client/src/store/home';

export class Store {
  public readonly router: RouterStore;

  public readonly home: HomeStore;

  constructor() {
    this.router = new RouterStore();
    this.home = new HomeStore();
  }
}

export const store = new Store();

if (__DEV__) {
  (window as any).store = store;
}
