const ToggleSidebar = (state = false, action) => {
    if(action.type === 'TOGGLE_SIDEBAR'){
        return !state;
    }
    return state;
}

export default ToggleSidebar;