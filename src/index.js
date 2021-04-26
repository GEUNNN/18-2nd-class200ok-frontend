import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combineReducer from "./store/reducer/rootreducer";
import GlobalStyle from "./styles/GlobalStyle";
import reducer from "./store/reducer/reducer";

// const store = createStore(reducer);
const store = createStore(combineReducer);

ReactDOM.render(
  <>
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  </>,
  document.getElementById("root")
);
