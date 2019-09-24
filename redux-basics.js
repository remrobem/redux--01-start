// this example file will be used in node, not in a browser

// way to 'import' in node
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    test: 'init',
    counter: 0
}

// app Dispatches action to Reducer 
// Reducer updates Store
// Store triggers Subscription on update
// Subscription updates app


// Reducer

// gets current state and action (change state message to reducer) to perform
// pure, sync functions, no side effects
// returns new state
/// need to create before store
const rootReducer = (state = initialState, action = { type: 0 }) => {

    console.log('Reducer state: ', state, ' action: ', action)

    if (action.type === 'INCREMENT_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1,
        }
    }

    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value,
        }
    }
    console.log('Reducer: no action')
    return state;
}

// Store
// contains current state for app
// updates central store
// need to use reducers to initialize store
// reducers only are allowed to update store
console.log('Store before reducer')
const store = createStore(rootReducer);

console.log('Store: store getState: ', store.getState())

// Subscription
// triggered when state changes (central store triggers subscription)
// passes updated state to application

store.subscribe(() => {
    console.log('Subscription: store getState: ', store.getState());
})

// Dispatching Action
// component dispatches an action to perform
// object sent is referred to as action in reducer
store.dispatch({ type: 'INCREMENT_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log('Dispach: store getState: ', store.getState());



