import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux';

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
            </div>
        );
    }
};

// map state to props when Counter component is used
const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
};

// function to execute when action is dispatched from Counter component
// the method names are props when this module is executed
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => {
            return dispatch({type: 'INCREMENT',  payload: 1})
        },
        onDecrementCounter: () => {
            return dispatch({type: 'DECREMENT', payload: 1})
        },
        onAddFive: () => {
            return dispatch({type: 'INCREMENT', payload: 5})
        },
        onSubtractFive: () => {
            return dispatch({type: 'DECREMENT', payload: 5})
        },
    }
};

// connect is sent the state and dispatch and maps to props for when this component executes, 
// and returns a function that takes the class as an argument and executes the class with the props 
// (since this function deals with state, should be a container class)
export default connect(mapStateToProps, mapDispatchToProps)(Counter);