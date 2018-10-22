import { inject as MobxInject, observer as MobxObserver } from 'mobx-react';
import { Store } from 'client/src/store';

type TmapFnArgs = { store: Store };
type TmapFn<T> = (params: TmapFnArgs) => T;
type TObserverOptions = {
  observeStore?: boolean;
};

type TResultComponent<OUTP, K extends keyof OUTP> = (
  React.ComponentType<
    Pick<OUTP, Exclude<keyof OUTP, K>> & Partial<Pick<OUTP, K>>
  >
);

type TResponse<OUTP, K extends keyof OUTP> = (COMP: React.ComponentType<OUTP>) => (
  TResultComponent<OUTP, K>
);
type TMobxHoc = <OUTP, K extends keyof OUTP = keyof OUTP>(
  mapFn: TmapFn<Pick<OUTP, K>>,
  observerOptions?: TObserverOptions,
) => TResponse<OUTP, K>;

const inject = <COMPP>(mapFn: TmapFn<COMPP>) => (
  MobxInject(
    (mobxContextWrap: TmapFnArgs) => (
      mapFn(mobxContextWrap)
    ),
  )
);

const observer = (WrappedComponent, { observeStore = true }: TObserverOptions) => {
  let component = WrappedComponent;

  if (observeStore) {
    component = MobxObserver(component);
  }

  return component;
};

export const MobxHoc: TMobxHoc = (
  (mapFn, observerOptions = {}) => (
    WrappedComponent => (
      inject(mapFn)(observer(WrappedComponent, observerOptions))
    )
  )
);
