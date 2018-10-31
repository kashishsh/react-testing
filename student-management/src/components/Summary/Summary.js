import React, { Component } from 'react';
import { connect } from 'react-redux';

class Summary extends Component {
  render() {
    if(this.props.students.length > 0) {
      const allStudentMarks = this.props.students.map(student => +student.marks);
      const max = Math.max(...allStudentMarks);
      const min = Math.min(...allStudentMarks);
      const avg = Math.floor(allStudentMarks.reduce((a, i) => a + i, 0) / allStudentMarks.length);

      return (
        <div className="summary">
          <div>Max : {max}</div>
          <div>Min : {min}</div>
          <div>Avg : {avg}</div>
        </div>
      );
    } else {
      return (
        <div>
          Add students to get summary
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}
export default connect(mapStateToProps, null)(Summary);
