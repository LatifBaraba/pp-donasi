import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App"
// SCSS
import "./assets/scss/index.scss";

// Redux
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/rootReducer";
import { Provider } from "react-redux";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
