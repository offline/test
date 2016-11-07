import React, { PropTypes } from 'react';
import {editTodo, hideSaveDialog} from '../actions/index';

export default class Dialog extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className="modal"></div>
                <div className="dialog">
                    <p>
                        {this.props.text}
                    </p>
                </div>
                <div className="buttons">
                    <button onClick={this.props.onSave}>{this.props.okText}</button>
                    <button onClick={this.props.onCancel}>{this.props.cancelText}</button>
                </div>
            </div>
        )
    }

}

Dialog.propTypes = {
    onSave: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    okText: React.PropTypes.string,
    cancelText: React.PropTypes.string,
    text: React.PropTypes.string.isRequired
};

Dialog.defaultProps = {
    okText: "OK",
    cancelText: "Cancel"
};

const mapStateToProps = (state, ownProps) => {
    return {

    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSave: (todo) => {
            dispatch(editTodo(todo))
        },

        onCancel: () => {
            dispatch(hideSaveDialog());
        }
    }
}

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Dialog)