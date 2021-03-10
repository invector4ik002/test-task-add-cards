import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose} from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';

import { App } from './components/App';

import './index.css';

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

