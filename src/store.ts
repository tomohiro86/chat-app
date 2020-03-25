import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './module';

const middlewares = [];
middlewares.push(thunk);
const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});
middlewares.push(loggerMiddleware);

export type State = ReturnType<typeof reducers>;

export default createStore(reducers, applyMiddleware(...middlewares));
