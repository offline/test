import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoForm from './TodoForm';
import {hideSaveDialog, showSaveDialog, editTodo} from '../actions';
import Dialog from  './Dialog';

export class ManageTodoPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todo: Object.assign({}, props.todo),
            saveDialog: Object.assign({}, props.saveDialog)
        };

        this.updateTodoState = this.updateTodoState.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.onClickSaveDialog = this.onClickSaveDialog.bind(this);
        this.onClickCancelDialog = this.onClickCancelDialog.bind(this);

    }

    componentWillMount() {
        if (this.state.todo && this.state.todo.id === "") {
            this.setState({
                todo: Object.assign({}, window.initData.todo)
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.saveDialog.isShowing !== this.state.saveDialog.isShowing){
            this.setState({
                saveDialog: Object.assign({}, {isShowing : nextProps.saveDialog.isShowing})
            });
        }
    }
    updateTodoState(event) {
        const field = event.target.name;
        let todo = this.state.todo;
        todo[field] = event.target.value;
        return this.setState({todo: todo});
    }

    onClickSave(event) {
        event.preventDefault();
        this.props.onClickSave();
    }

    onClickSaveDialog(event){
        this.props.onClickSaveDialog(this.state.todo);
        this.context.router.push('/');
    }

    onClickCancelDialog(event){
        event.preventDefault();
        this.props.onClickCancelDialog();
    }

    render() {
        return (
            <div>
                <TodoForm
                    todo={this.state.todo}
                    onChange={this.updateTodoState}
                    onSubmit={this.onClickSave}
                />
                {this.state.saveDialog.isShowing &&
                <Dialog
                    onCancel={this.onClickCancelDialog}
                    onSave={this.onClickSaveDialog}
                    text={"save?"}
                    />}
            </div>
        );
    }
}

ManageTodoPage.contextTypes = {
    router: PropTypes.object
};

function getTodoById(todos, id) {
    const todo = todos.filter(todo => todo.id == id);
    if (todo) return todo[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const todoId = ownProps.params.id;
    let todo = {id: '', name: '', completed: false};
    if (todoId && state.todos.length > 0) {
        todo = getTodoById(state.todos, todoId);
    }
    return {
        todo: todo,
        saveDialog: state.saveDialog
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClickSave: () => {
            dispatch(showSaveDialog());
        },

        onClickSaveDialog: (todo) => {
            dispatch(editTodo(todo));
            dispatch(hideSaveDialog());
        },

        onClickCancelDialog: () => {
            dispatch(hideSaveDialog());
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageTodoPage);
