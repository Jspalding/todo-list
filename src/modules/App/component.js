import React, { Component } from 'react';
import { uniqueId } from 'lodash';

import { Todo } from '../Todo/index';

export class App extends Component {
  state = {
    todo: '',
    todos: [ { text: 'Add your first todo' } ],
    counter: 1
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { todos } = this.state;
    const { todos: prevTodos } = prevState;
    if ( prevTodos.length !== todos.length ) {
      this.setState({ counter: todos.length });
    }
  };

  handleChange = event => this.setState({ todo: event.target.value });

  handleClickAdd = () => {
    const { todo, todos } = this.state;
    this.setState({ todos: [ ...todos, { text: todo } ] });
  };

  handleClickDelete = index => {
    const { todos } = this.state;
    const todosCopy = [...todos];
    todosCopy.splice(index, 1);
    this.setState({ todos: todosCopy });

    console.log(`Deleting todo number ${index}`);
  }

  render() {
    const { todo, todos, counter } = this.state;

    todos.map((todo, index) => {
      todos[index] = { ...todo, id: uniqueId() };
    });

    let todoList = (<div>
      {todos.map((todo, index) => {
        return <Todo key={todo.id} 
        onClickDelete={() => this.handleClickDelete(index)} 
        text={todo.text} />
      })}
    </div>);

    return (
      <div className="todo-list">
        <h1>todos</h1>
        <p>{counter} remaining</p>
        {todoList}
        <div className="todo-input">
          <input onChange={this.handleChange} placeholder="..." type="text" value={todo}/>
          <button onClick={this.handleClickAdd}>Add</button>
        </div>
      </div>
    )
  }
}
