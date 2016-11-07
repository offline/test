import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Banner from '../containers/Banner';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <Banner />
    </div>
);

export default App