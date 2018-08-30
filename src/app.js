import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes/Routes';
import configureStore from './store/configurestore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const jsx = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));   