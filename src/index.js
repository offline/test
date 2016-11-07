import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import { Router, browserHistory, Route} from 'react-router';
import ManageTodoPage from './containers/ManageTodoPage';
import App from './components/App';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

// comment
// ok man!

let store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, reduxImmutableStateInvariant()));

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/todo/:id" component={ManageTodoPage} />
        </Router>
    </Provider>,
    document.getElementById('app')
);
