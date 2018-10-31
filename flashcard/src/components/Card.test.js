import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

const props = {
  card: {
    answer: 'This is a test answer',
    prompt: 'This is a test prompt'
  }
};
describe('Card', () => {
  const card = shallow(<Card {...props}/>);
  const { answer, prompt } = props.card;

  it('sets `reveal` to be `false`', () => {
    expect(card.state().reveal).toBe(false);
  });
  it('renders the card prompt', () => {
    expect(card.find('.card-prompt h4').text()).toEqual(prompt);
  });
  it('renders the card answer', () => {
    expect(card.find('.card-answer h4').text()).toEqual(answer);
  });
  it('applies the `text-hidden` class to the card answer', () => {
    expect(card.find('h4').at(1).hasClass('text-hidden')).toBe(true);
  });

  describe('when clicking on the card', () => {
    beforeEach(() => {
      card.simulate('click');
    });
    it('udpates `reveal to true`', () => {
      expect(card.state().reveal).toBe(true);
    });
    it('applies the `text-hidden` class to the card answer', () => {
      expect(card.find('h4').at(1).hasClass('text-revealed')).toBe(true);
    });
  });
});
