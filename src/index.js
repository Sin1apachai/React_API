import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Router, browserHistory } from 'react-router'
import routes from './routes/routes'

import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'

import reducers from './reducer/reduser'

import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3009/api/graphql'
})
const client = new ApolloClient({
  networkInterface
})
// const store = createStore(reducers)

const store = createStore(
  reducers,
  applyMiddleware(thunk, promiseMiddleware())
)

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router
        history={browserHistory}
        routes={routes}
      />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
