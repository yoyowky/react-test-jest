// create react store
import { createStore, applyMiddleware } from 'redux';

// use thunk
/**
 * Redux Thunk middleware allows you to write action creators that return a function instead of an action
 * With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extends the store's abilities, and lets you write async logic that interacts with the store.
 */
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers';

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(RootReducer)