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