import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// create redux store before app loads
// need reducer created to createStore
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
const store = createStore(reducer);

// wrap app in Provider - hooks up redux with react
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
