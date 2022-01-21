const initialState = {counter : 0};

export function countReducer(state=initialState , data){
    switch (data.type) {
        case 'increment':
            return {
             counter:state.counter+1
            };
        case 'decrement':
        return {
             counter:state.counter-1
        };
        default:
            return state
    }
}