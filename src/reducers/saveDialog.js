const saveDialog = (state = {isShowing: false}, action) => {
    switch (action.type) {
        case 'SHOW_SAVE_DIALOG':
            return Object.assign({}, state, {isShowing: true});

        case 'HIDE_SAVE_DIALOG':
            return Object.assign({}, state, {isShowing: false});

        default:
            return state;
    }
};

export default saveDialog;