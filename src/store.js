import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

export function reducer(state, action = {}) {
  switch (action.type) {
    case 'MESSAGES_LOADING_FULFILLED':
      return Object.assign({}, state, {
        messages: action.payload
      });

    case 'MEMBERS_LOADING_FULFILLED':
      return Object.assign({}, state, {
        members: action.payload
      });
    default:
      return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(
  promiseMiddleware(),
)));