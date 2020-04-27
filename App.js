import React from 'react';
import Gate from './src/navigation/Gate';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer, {rootSaga} from './src/modules';
import createSagaMiddleware from 'redux-saga';
import {AsyncStorage} from '@react-native-community/async-storage';
import {tempSetUser, check} from './src/modules/user';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

async function loadUser() {
  try {
    const user = AsyncStorage.getItem('user');
    if (!user) {
      return null;
    }

    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch (error) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Gate />
      </Provider>
    </>
  );
};

export default App;
