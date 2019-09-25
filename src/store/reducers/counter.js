import * as actions from '../actions';

const initialState = {
    counter: 0,
}

const Reducer = (state = initialState, action) => {

    switch (action.type) {

        case actions.INCREMENT:
            return {
                ...state,
                counter: state.counter + action.payload,
            };

        case actions.DECREMENT:
            return {
                ...state,
                counter: state.counter - action.payload,
            };
    }

    return state;
}

export default Reducer;