import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { customerReducer } from './customer';

const rootReducer = combineReducers({
  customerReducer
});
export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
export * from './customer';
