import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import ThunkMiddleware from 'redux-thunk';
import createFetchMiddleware from 'redux-composable-fetch';
import rootReducer from './reducers';

const FetchMiddleware = createFetchMiddleware();

const finalCreateStore = compose(
  applyMiddleware(ThunkMiddleware, FetchMiddleware)
)(createStore);

const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routerReducer,
}))

export default function configureStore(initialStore) {
  const store = finalCreateStore(reducer, initialStore);
  return store;
}
