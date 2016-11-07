import * as types from './actionTypes';

let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    };
};

export const editTodo = (todo) => {
    return {
        type: types.EDIT_TODO,
        todo
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter
    };
};

export const toggleTodo = (id) => {
    return {
        type: types.TOGGLE_TODO,
        id
    };
};

export const showSaveDialog = () => {
    return {
        type: types.SHOW_SAVE_DIALOG
    }
};

export const hideSaveDialog = () => {
    return {
        type: types.HIDE_SAVE_DIALOG
    }
};

export const makeBannerVisible = () => {
    debugger;
    return {
        type: types.SHOW_BANNER
    }
}

export function showBanner(){
    debugger;
    return function(dispatch){
        setTimeout(()=> {
            debugger;
            dispatch(makeBannerVisible)
        }, 5000);
    }
}