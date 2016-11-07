import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
    <table>
        <tbody>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                todo = {todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
        </tbody>
    </table>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;