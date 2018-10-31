import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddStudent from './../AddStudent/AddStudent';
import Summary from './../Summary/Summary';
import StudentLists from './../StudentsList/StudentsList';


class StudentDashboard extends Component {
  render() {
    return (
      <div>
        <AddStudent />
        <hr />
        <Summary />
        <hr />
        <StudentLists />
      </div>
    );
  }
}

export default connect(null, null)(StudentDashboard);
