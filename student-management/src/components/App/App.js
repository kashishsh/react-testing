import React, { Component } from 'react';
import StudentDashboard from './../StudentDashboard/StudentDashboard';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Student Management</h2>
        <hr />
        <StudentDashboard />
      </div>
    );
  }
}


export default App;
