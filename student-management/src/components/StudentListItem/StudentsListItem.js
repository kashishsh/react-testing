import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { updateStudent } from '../../actions';

class StudentListItem extends Component {
  constructor(props) {
    super(props);
    const { id, name, marks } = this.props.student;

    this.state = {
      isEditing: false,
      id,
      name,
      marks
    };
  }
  updateStudent(e) {
    if(e.keyCode === 13) {
      this.props.updateStudent({
        id: this.state.id,
        name: this.state.name,
        marks: this.state.marks
      });

      this.setState({
        isEditing: false
      });
    } else if (e.keyCode === 27) {
      this.setState({
        ...this.props.student,
        isEditing: false
      });
    }
  }
  render() {
    if(this.state.isEditing) {
      return (
        <Form className= "student-list-item" inline onKeyDown={(e) => this.updateStudent(e)}>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Jane Doe"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              autoFocus
            />
          </FormGroup>{' '}
          <FormGroup>
            <FormControl
              type="number"
              placeholder="0"
              value={this.state.marks}
              onChange={(e) => this.setState({ marks: e.target.value })}
            />
          </FormGroup>{' '}
          <Button onClick={() => this.setState({ isEditing: false })}>Cancel</Button>
        </Form>
      )
    }

    return <div className = "student-list-item" onClick={() => this.setState({ isEditing: true })}>{this.state.name} / {this.state.marks}</div>
  }
}

export default connect(null, { updateStudent })(StudentListItem);
