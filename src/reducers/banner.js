import * as types from '../actions/actionTypes';

const banner = (state = {isVisible: false}, action) => {
    switch (action.type) {
        case types.SHOW_BANNER:
            debugger;
            return Object.assign({}, state, {isVisible: true});
        default:
            return state;
    }
};

export default banner;