import { persistStore, autoRehydrate } from 'redux-persist';
import { applyMiddleware, createStore, compose } from 'redux';
import { asyncSessionStorage } from 'redux-persist/storages';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

const logger = createLogger();

const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware, logger), autoRehydrate()
));

persistStore(store, { storage: asyncSessionStorage });

export default store;
