import {
  applyMiddleware,
  createStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { authMiddleware } from './middleware/authMiddleware';
import rootReducer from './reducers';

const store = () => {
  if (process.env.NODE_ENV === 'development') {
    return createStore( rootReducer, composeWithDevTools( applyMiddleware( thunk, logger, authMiddleware ) ) );
  } else {
    return createStore( rootReducer, applyMiddleware( thunk, authMiddleware ) );
  }
};

export default store;
