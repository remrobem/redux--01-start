# Redux demo app

## Installed

npm i --save redux
npm i --save react-redux

## Updates

npm update react react-dom react-scripts

## Activate Redux

index.js

```javascript
// create redux store before app loads
// need reducer created to createStore
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
const store = createStore(reducer);

// wrap app in Provider - hooks up redux with react

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
```

store/reducer.js

```javascript

// reducer function is defined
const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    return state;
}

export default Reducer;
```

## Pass state as props

SomeContainer.js

```javascript
import React, { Component } from 'react';

import { connect } from 'react-redux';

class SomeClass extends Component {
    ,,,
    render() {
        return (
            <div>
                {this.props.ctr}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
};

export default connect(mapStateToProps)(SomeClass);
```

## Dispatch

SomeContainer.js

```javascript

import React, { Component } from 'react';

import { connect } from 'react-redux';

class SomeClass extends Component {
    .....
    render() {
        return (
```

```html
            <div>
                {this.props.ctr}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
            </div>
```

```javascript
        );
    }
}

const mapStateToProps = ......

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => {
            return dispatch({type: 'INCREMENT',  payload: 1})
        },
        onDecrementCounter: () => {
            return dispatch({type: 'DECREMENT', payload: 1})
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps )(SomeClass);
```

## Reducer

```javascript
const initialState = {
    counter: 0,
}

const Reducer = (state = initialState, action) => {

    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + action.payload,
        }
    }

    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - action.payload,
        }
    }

    return state;
}

export default Reducer;
```
