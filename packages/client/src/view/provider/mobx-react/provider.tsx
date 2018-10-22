import React, { PureComponent } from 'react';
import { Provider as MobxProvider } from 'mobx-react';
import { store } from 'client/src/store';

interface ProviderProps {
  children: JSX.Element,
}

export default class Provider extends PureComponent<ProviderProps> {
  render() {
    const { children } = this.props;

    return (
      <MobxProvider store={store}>
        {children}
      </MobxProvider>
    );
  }
}
