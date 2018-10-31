import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentListItem from './../StudentListItem/StudentsListItem';

class StudentLists extends Component {
  render() {
    return (
      <div>
        {
          this.props.students.map(student => {
            return (
              <StudentListItem key={student.id} student={student}/>
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  };
}

export default connect(mapStateToProps, null)(StudentLists);
