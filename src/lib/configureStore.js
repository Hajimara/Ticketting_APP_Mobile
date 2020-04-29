//configureStore.js
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../modules';
import {composeWithDevTools} from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  version: 0,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
let persistor = persistStore(store);

export {store, persistor, sagaMiddleware};
