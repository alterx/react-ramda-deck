import React from 'react';
import TodoList from './todo';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.addToDo = this.addToDo.bind(this);
  }

  addToDo () {
    const { actions } = this.props;
    if (this.refs.newTodo) {
      actions.addToDo(this.refs.newTodo.value);
      this.refs.newTodo.value = '';
    }
  }

  render () {
    const { items, name } = this.props;

    return <div className="container">
      <h1>Hello {name}</h1>
      <input type="text" ref="newTodo" autoFocus />
      <button onClick={this.addToDo}>Add</button>
      <TodoList items={items} />
    </div>;
  }
}

export default App;
