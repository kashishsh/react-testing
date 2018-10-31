import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const cookie_key = 'NOTES';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      notes: []
    };
  }
  componentDidMount() {
    this.setState({
      notes: read_cookie(cookie_key)
    });
  }
  submit() {
    this.setState(prevState => {
      const { notes, text } = prevState;
      const allNotes = [...notes, { text }];

      bake_cookie(cookie_key, allNotes);

      return {
        notes: [...notes, { text }]
      }
    });
  }
  clear() {
    delete_cookie(cookie_key);

    this.setState({
      notes: []
    });
  }
  render() {
    return (
      <div>
        <h2>Note to self</h2>
        <Form inline>
          <FormControl onChange={event => {this.setState({text: event.target.value})}}/>
          <br/>
          <Button onClick={() => this.submit()}>Submit</Button>
        </Form>
        {
          this.state.notes.map((note, index) => {
            return (
              <Note key={index} note={note}/>
            )
          })
        }
        <hr />
        <Button onClick={() => this.clear()}>Clear button</Button>
      </div>
    );
  }
}

export const color = 'blue';
export const number = 22;

export default App;
