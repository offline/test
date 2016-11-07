import React from 'react';
import TextInput from './../components/TextInput';

const TodoForm = ({todo, onChange, onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            <h1>Edit Todo</h1>
            <TextInput
                name="text"
                value={todo.text}
                label="text"
                onChange={onChange}
            />
            <button type="submit">
                Save
            </button>
        </form>
    );
};

TodoForm.propTypes = {
    todo: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired
};

export default TodoForm;