import React, { PureComponent } from 'react';
import MobixProvider from './mobx-react/provider';
import { MuiTheme } from './mui-theme';

interface ProviderProps {
  children: JSX.Element
}

export default class Provider extends PureComponent<ProviderProps> {
  render() {
    const { children } = this.props;
    return (
      <MobixProvider>
        <MuiTheme>
          {children}
        </MuiTheme>
      </MobixProvider>
    );
  }
}
