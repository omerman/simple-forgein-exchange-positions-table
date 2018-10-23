import { RouterStore } from 'client/src/store/router';
import { HomeStore } from 'client/src/store/home';
import { runInAction, computed, observable } from 'mobx';

export class Store {
  public readonly router: RouterStore;

  public readonly home: HomeStore;

  @observable
  private ready: boolean;

  constructor() {
    this.router = new RouterStore();
    this.home = new HomeStore();
    this.ready = false;
    this.getReady();
  }

  private getReady() {
    // Getting ready. #9
    setTimeout(
      () => {
        runInAction(() => {
          this.ready = true;
        });
      },
      3000,
    );
  }

  @computed get isReady() {
    return this.router.isStarted() && this.ready;
  }
}

export const store = new Store();

if (__DEV__) {
  (window as any).store = store;
}
