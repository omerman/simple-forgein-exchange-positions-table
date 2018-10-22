import { RouterStore } from 'client/src/store/router';

export class Store {
  public readonly router: RouterStore;

  constructor() {
    this.router = new RouterStore();
  }
}

export const store = new Store();


if (__DEV__) {
  (window as any).store = store;
}
