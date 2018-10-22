import React, { PureComponent } from 'react';
import Provider from '../provider/index';
import { TopBar } from './top-bar';
import { App as AppComponent } from '../component/app';
import { Router } from './router';

export default class App extends PureComponent {
  render() {
    return (
      <Provider>
        <AppComponent>
          <TopBar />
          <Router />
        </AppComponent>
      </Provider>
    );
  }
}
