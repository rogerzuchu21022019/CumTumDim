import React from 'react';
import {Provider} from 'react-redux';
let persistor = persistStore(Store);

import {persistStore} from 'reduxjs-toolkit-persist';
import {Store} from './src/app/app_store/Store';
import {PersistGate} from 'reduxjs-toolkit-persist/lib/integration/react';
import App from './App';

const Root = () => (
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

export default Root;
