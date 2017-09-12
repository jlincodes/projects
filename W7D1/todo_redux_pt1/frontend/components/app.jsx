import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from './todo_list/todo_list_container';

class App extends React.Component{
  constructor() {
    super();
  }

  render(){
    return (
        <div>
          <h1>Root and App are working</h1>
          <TodoContainer />
        </div>
    );
  }
}

export default App;
