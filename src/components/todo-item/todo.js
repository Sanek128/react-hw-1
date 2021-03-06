// export default function Todo(props) {

//     let {todoItem} = props;

//     return(
//     <div>
//         <div>{todoItem.action}</div>
//         <h3>{todoItem.priority.toString()}</h3>
//     </div> 
//     );

// };

import React, { Component } from 'react';

class todo extends Component {

    state = {isDone: this.props.todoItem.isDone};

    constructor(props) {
        super(props);
    }
    action = (todoItem) => {
        todoItem.isDone = !todoItem.isDone;
        this.setState({isDone: !this.props.todoItem.isDone});


        console.log(todoItem);
    };

    render() {
        let {todoItem} = this.props;
        return (
            <div>
                {
                    todoItem.isDone && (
                        <del>
                            <div>{todoItem.action} -- {todoItem.priority.toString()}</div>
                        </del>
                    )
                }
                {
                    !todoItem.isDone && (
                        <div>{todoItem.action} -- {todoItem.priority.toString()}</div>
                    )
                }
                <button onClick={() => {return this.action(todoItem)}}>Action done</button>
            </div>
        );
    }
}

export default todo;