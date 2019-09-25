import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
            default:
                console.log('error in switch');
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddFive} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractFive} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
};

// map state to props when Counter component is used
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results,
    }
};

// function to execute when action is dispatched from Counter component
// the method names are props when this module is executed
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => {
            return dispatch({ type: actions.INCREMENT, payload: 1 })
        },
        onDecrementCounter: () => {
            return dispatch({ type: actions.DECREMENT, payload: 1 })
        },
        onAddFive: () => {
            return dispatch({ type: actions.INCREMENT, payload: 5 })
        },
        onSubtractFive: () => {
            return dispatch({ type: actions.DECREMENT, payload: 5 })
        },
        onStoreResult: (result) => dispatch({ type: actions.STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispatch({ type: actions.DELETE_RESULT, resultId: id }),
    }
};

// connect is sent the state and dispatch and maps to props for when this component executes, 
// and returns a function that takes the class as an argument and executes the class with the props 
// (since this function deals with state, should be a container class)
export default connect(mapStateToProps, mapDispatchToProps)(Counter);