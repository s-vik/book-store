import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import rootReducers from './reducers';


export default createStore(rootReducers, applyMiddleware(logger,reduxThunk));
