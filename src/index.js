import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// create redux store before app loads
// need reducer created to createStore
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import reducer from './store/reducer';

// multiple reducers
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers( {
    res: resultReducer,
    ctr: counterReducer,
});

const store = createStore(rootReducer);

// wrap app in Provider - hooks up redux with react
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
