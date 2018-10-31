import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStack } from './../actions/index';

import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';



export class StackForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      cards: []
    };
  }

  addCard() {
    const { cards } = this.state;

    cards.push({
      id: cards.length,
      prompt: '',
      answer: ''
    });

    this.setState({ cards });
  }

  udpateCardPart(event, index, part) {
    const { cards } = this.state;

    cards[index][part] = event.target.value;

    this.setState({ cards });
  }

  addStack() {
    this.props.addStack(this.state);
  }

  render() {
    return (
      <div>
        <Link to="/" className="link-home">
          <h4>Home</h4>
        </Link>
        <h4>Create a new stack</h4>
        <br />
        <Form inline>
          <FormGroup>
            <ControlLabel>Title:</ControlLabel>
            <br />
            <FormControl onChange={event => this.setState({ title: event.target.value })}/>
          </FormGroup>
          {
            this.state.cards.map((card, index) => {
              return (
                <div key={card.id}>
                  <br />
                  <FormGroup>
                    <ControlLabel>Prompt:</ControlLabel>
                    {' '}
                    <FormControl
                      onChange={event => this.udpateCardPart(event, index, 'prompt')}
                    />
                    {' '}
                    <ControlLabel>Answer:</ControlLabel>
                    {' '}
                    <FormControl
                    onChange={event => this.udpateCardPart(event, index, 'answer')}
                    />
                  </FormGroup>
                </div>
              )
            })
          }
        </Form>
        <br />
        <Button onClick={() => this.addCard()}>Add Card</Button>
        {' '}
        <Button onClick={() => this.addStack()}>Save and add the stack</Button>
      </div>
    )
  }
}

export default connect(null, { addStack })(StackForm);
