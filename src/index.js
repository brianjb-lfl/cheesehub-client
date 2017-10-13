import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import CheeseList from './components/cheese-list';
import cheeseReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';


const testData = 
  [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
  ];

export default createStore(
  cheeseReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <CheeseList />
  </Provider>,
  document.getElementById('root')
);


  registerServiceWorker();
