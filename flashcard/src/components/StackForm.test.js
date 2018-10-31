import React from 'react';
import { shallow } from 'enzyme';
import { StackForm } from './StackForm';
import { stack } from '../data/fixtures';

const changeTitle = 'Change the title';
const changePrompt = 'Change the prompt';
const changeAnswer = 'Change the answer';

describe('StackForm', () => {
  const stackForm = shallow(<StackForm />);



  it('renders a link to home', () => {
    expect(stackForm.find('Link h4').text()).toEqual('Home');
  });

  it('renders a title', () => {
    expect(stackForm.find('h4').at(1).text()).toEqual('Create a new stack');
  });

  it('renders a form component', () => {
    expect(stackForm.find('Form').exists()).toEqual(true);
  });

  it('renders a button to add a new card', () => {
    expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card');
  });

  it('renders a button to submit the form', () => {
    expect(stackForm.find('Button').at(1).props().children).toEqual('Save and add the stack');
  });

  describe('and updating the title', () => {
    beforeEach(() => {
      stackForm.find('FormControl').at(0).simulate('change', {
        target: { value: changeTitle }
      });
    });

    it('updates the title in state', () => {
      expect(stackForm.state().title).toEqual(changeTitle);
    });

    describe('when adding a new card', () => {
      beforeEach(() => {
        stackForm.find('Button').at(0).simulate('click');
      });

      afterEach(() => {
        stackForm.setState({
          cards: []
        });
      });

      it('adds a new card to the state', () => {
        expect(stackForm.state().cards.length).toEqual(1);
      });

      it('renders the prompt section', () => {
        expect(stackForm.find('ControlLabel').at(1).props().children).toEqual('Prompt:')
      });
      it('renders the answer section', () => {
        expect(stackForm.find('ControlLabel').at(2).props().children).toEqual('Answer:')
      });

      describe('and updating the card prompt', () => {
        beforeEach(() => {
          stackForm.find('FormControl').at(1).simulate('change', {
            target: { value: changePrompt }
          })
        });
        it('updates the prompt in the state', () => {
          expect(stackForm.state().cards[0].prompt).toEqual(changePrompt);
        });
      });

      describe('and updating the card answer', () => {
        beforeEach(() => {
          stackForm.find('FormControl').at(2).simulate('change', {
            target: { value: changeAnswer }
          });
        });
        it('updates the answer in the state', () => {
          expect(stackForm.state().cards[0].answer).toEqual(changeAnswer);
        });
      });
    });
  });
});
