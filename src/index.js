import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';


const testData = 
  [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
  ];

ReactDOM.render(<CheeseList cheeses={testData}/>, document.getElementById('root'));
registerServiceWorker();
