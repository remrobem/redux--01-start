import * as actions from '../actions';

const initialState = {
    results: [],
}

const Reducer = (state = initialState, action) => {

    switch (action.type) {

        // these methods need to keep the state immutable
        // the concat and filter create new arrays for result
        // do not use anything that produces shallow copy
        case actions.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result }),
            };
        case actions.DELETE_RESULT:
            const updatedArray = state.results.filter((result) => {
                return result.id !== action.resultId;
            })
            return {
                ...state,
                results: updatedArray,
            };
    }

    return state;
}

export default Reducer;