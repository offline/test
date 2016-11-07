import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import saveDialog from './saveDialog';
import banner from './banner';

// const todoApp = combineReducers({
//     todos,
//     visibilityFilter
// })
//
// export default todoApp

export default function todoApp(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action),
        saveDialog: saveDialog(state.saveDialog, action),
        banner: banner(state.banner, action)
    };
}
