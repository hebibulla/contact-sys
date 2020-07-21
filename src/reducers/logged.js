const logged = (state = false, action) => {
    switch (action.type) {
        case 'CURRENT_USER':
            return true;
        default:
            return state;
    }
}
export default logged;