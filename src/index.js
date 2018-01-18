import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <App  aria-hidden='true' />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
