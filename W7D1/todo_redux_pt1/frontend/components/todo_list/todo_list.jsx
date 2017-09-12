import React from 'react';
import Item from './todo_list_item';

import getAllTodos from '../../reducers/selectors';

// const List = ({todos}) => {
//   const list = getAllTodos(todos);
//   return (
//     <ul>{list}</ul>
//   );
// };

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    // const todoItems = getAllTodos(todos);
    console.log(todos);
    todos.forEach( (todo) => {
      console.log(todo.title);
    });
    return (
      <div>
        <h1>Todo List is working</h1>
        <ul>

        </ul>
      </div>
    );
  }
}

export default TodoList;
