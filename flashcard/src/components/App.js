import React, { Component } from 'react';
import StackList from './StackList';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Flashcard Pro</h2>
        <hr />
        <StackList />
        <hr/>
        <Link to="stack_form">
          <h4>Create a new stack</h4>
        </Link>
      </div>
    )
  }
}

export default App;
