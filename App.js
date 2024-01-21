// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./src/store/store";
import Container from "./src/Container";

export default function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
