export const ADD_STUDENT = 'ADD_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';

export const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    student
  };
}

export const updateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
    student
  }
}
