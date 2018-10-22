import { DataTableStore } from 'client/src/store/common/data-table';
import { observable, computed, action } from 'mobx';

export class TroiggeredDataTableStore<T> extends DataTableStore<T> {
  @observable
  private triggered: boolean = false;

  @computed
  get data() {
    return this.triggered && this.dataAndCount.data;
  }

  @computed
  get totalCount() {
    return this.triggered && this.dataAndCount.totalCount;
  }

  private willTrigger: () => void;

  @action
  trigger = () => {
    this.willTrigger();
    this.triggered = true;
  }

  @action
  clear = () => {
    this.triggered = false;
  }

  hookWillTrigger(willTrigger: () => void) {
    this.willTrigger = willTrigger;
  }
}
