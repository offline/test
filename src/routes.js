import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ManageTodoPage from './containers/ManageTodoPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={App} />
        <Route path="/todo/:id" component={ManageTodoPage} />
    </Route>
);
