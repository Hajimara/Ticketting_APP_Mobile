import React from 'react';
import Gate from './src/navigation/Gate';
import {Provider} from 'react-redux';
import {rootSaga} from './src/modules';
import {AsyncStorage} from '@react-native-community/async-storage';
import {tempSetUser, check} from './src/modules/user';
import {PersistGate} from 'redux-persist/integration/react';
import {store, sagaMiddleware, persistor} from './src/lib/configureStore';

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
        <PersistGate loading={null} persistor={persistor}>
          <Gate />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
