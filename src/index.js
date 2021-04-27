import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Provider } from 'react-redux';
// import { applyMiddleware } from 'redux';
// import { createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import moduleName from 'module'
// import { Provider } from 'react-redux'

// const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
