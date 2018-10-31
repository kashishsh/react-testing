import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { addStudent } from '../../actions';


class AddStudent extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      marks: ''
    };
  }
  addStudent(e) {
    if(e.keyCode === 13 || e.target.type === 'button') {
      this.props.addStudent(this.state);

      this.setState({
        name: '',
        marks: ''
      });
    }
  }
  render() {
    return (
      <div>
        <Form inline onKeyDown={(e) => this.addStudent(e)}>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Name</ControlLabel>{' '}
            <FormControl
              type="text"
              placeholder="Jane Doe"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </FormGroup>{' '}
          <FormGroup>
            <ControlLabel>Marks</ControlLabel>{' '}
            <FormControl
              type="number"
              placeholder="0"
              value={this.state.marks}
              max="0"
              onChange={(e) => this.setState({ marks: e.target.value })}
            />
          </FormGroup>{' '}
          <Button onClick={(e) => this.addStudent(e)}>Add Student</Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { addStudent })(AddStudent);
