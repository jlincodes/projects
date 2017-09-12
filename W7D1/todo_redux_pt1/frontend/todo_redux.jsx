import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import {receiveTodos, receiveTodo} from './actions/todo_actions';
// import App from "./components/app";
import Root from "./components/root";
import {getAllTodos} from './reducers/selectors';
import TodoList from './components/todo_list/todo_list';


// const store = configureStore();
// window.store = store;

document.addEventListener('DOMContentLoaded', function () {
  const store = configureStore();
  const root = document.getElementById("main");
  ReactDOM.render(<Root store={store} />, root);
  // ReactDOM.render(<TodoList />, root);
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.getAllTodos = getAllTodos;
});

// <Root store={store} variable="parker"/>
//
// this.props.variable
