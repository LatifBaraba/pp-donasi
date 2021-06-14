import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
// import { applyMiddleware } from 'redux';
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/rootReducer'
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
