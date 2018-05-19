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
    todo && this.setState({ todos: [ ...todos, { text: todo } ] });
  };

  handleClickDelete = index => {
    console.log(`Deleting todo number ${index}`);
    const { todos } = this.state;
    this.setState({ todos: [
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
    ]});
  }

  render() {
    this.state.todos.forEach((todo, index) => {
      this.state.todos[index] = { ...todo, id: uniqueId() };
    });
    const { todo, todos, counter } = this.state;
    return (
      <div className="todo-list">
        <h1>todos</h1>
        <p>{counter} remaining</p>
        <div>
          {
            todos.length
              ? todos.map((todo, index) => <Todo key={todo.id} onClickDelete={() => this.handleClickDelete(index)} text={todo.text} />)
              : 'You\'re all done 🌴'
          }
        </div>
        <div className="todo-input">
          <input onChange={this.handleChange} placeholder="..." type="text" value={todo}/>
          <button onClick={this.handleClickAdd}>Add</button>
        </div>
      </div>
    )
  }

}
