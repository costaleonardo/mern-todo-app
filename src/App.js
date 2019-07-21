import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { TodosList } from './components/todos-list.component';
import { EditTodo } from './components/edit-todo.component';
import { CreateTodo } from './components/create-todo.component';

function App() {
  return (
    <Router>
      <div className="container">
        <h2>MERN-Stack Todo App</h2>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:di" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
