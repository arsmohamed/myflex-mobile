// App.js
import React from 'react';
import Container from './src/Container';
import { Provider } from 'react-redux';
import store from './src/store/store';
import NewContainer from './src/NewContainer';

export default function App() {
  return (
    <Provider store={store}>
      <NewContainer />
    </Provider>
  );
} 