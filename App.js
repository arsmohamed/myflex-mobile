// App.js
import React from 'react';
import Container from './src/Container';
import { Provider } from 'react-redux';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
} 