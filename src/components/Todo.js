import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const Todo = ({ onClick, todo }) => (
    <tr>
        <td
            onClick={onClick}
            style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? 'red' : 'black'
            }}
        >
        {todo.text}
        </td>
        <td>
            <Link to={'/todo/' + todo.id}>Edit</Link>
        </td>
    </tr>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
};

export default Todo;