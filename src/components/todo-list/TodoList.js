import React, { Component } from 'react';
import { todoList } from '../../data/data';
import Todo from '../todo-item/todo';

class TodoList extends Component {
    render() {
        return (
            <div>
                {
                    todoList.map(item => {
                        return(
                            <Todo todoItem = {item} key={item.id}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default TodoList;


