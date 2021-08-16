import React from 'react';
import AppContainer from './src/navigations/AppNavigation';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

const store = configureStore()


export default function App() {
  return (
    <Provider store={store}>
     <AppContainer />
     </Provider>
  );
}