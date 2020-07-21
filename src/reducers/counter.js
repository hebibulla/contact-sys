const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMNT':
            return state + 1;
        case 'DECREMNT':
            return state - 1;
        default:
            return state;
    }
}
export default counterReducer;