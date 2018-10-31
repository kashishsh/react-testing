import { ADD_STUDENT, UPDATE_STUDENT } from './../actions/index';
import { combineReducers } from 'redux';

const students = (state = [], action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return [...state, { id: state.length, ...action.student }];
    case UPDATE_STUDENT:
      return state.map(student => (student.id === action.student.id) ? action.student : student);
    default:
      return state;
  }
}

export default combineReducers({
  students
})
