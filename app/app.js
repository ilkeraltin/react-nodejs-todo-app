import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import store from './store/store';
import Index from './containers/index';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>
  , document.getElementById('app')
);
