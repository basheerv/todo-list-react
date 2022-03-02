import React, { Component } from 'react'

import TodoItem from './TodoItem';
export default class TodoList extends Component {
    render() {
        // console.log(this.props);
        const {items, handleEdit, handleDelete, handleClearList } = this.props;
    return (
        <div className='text-center col-8 mx-auto border p-3 mt-3'>
            <ul>
                <h2>Todo List</h2>
                {
                    items.map(item => {
                        return (
                        <TodoItem key={item.id}
                            title={item.title}
                            handleEdit={() => handleEdit(item.id)}
                            handleDelete={() => handleDelete(item.id)}
                            />
                       )
                    })
                }
            </ul>
            <div className='d-grid'>
                <button type='button' className='btn btn-danger' onClick={handleClearList}>Clear all List</button>
            </div>
        </div>
    )
  }
}
