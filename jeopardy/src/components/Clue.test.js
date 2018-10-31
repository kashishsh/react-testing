import React from 'react';
import { shallow } from 'enzyme';
import { Clue } from './Clue';
import { clue } from '../data/fixtures';

const props = {
  clue
};

describe('Clue', () => {
  let clueWrapper = shallow(<Clue {...props}/>);

  it(`renders an value with text ${clue.value}`, () => {
    expect(clueWrapper.find('h4').text()).toEqual(clue.value);
  });

  it(`renders a question with text ${clue.question}`, () => {
    expect(clueWrapper.find('h5').at(0).text()).toEqual(clue.question);
  });

  it(`renders an answer with text ${clue.answer}`, () => {
    expect(clueWrapper.find('h5').at(1).text()).toEqual(clue.answer);
  });

  it('answer is hidden by default', () => {
    expect(clueWrapper.find('h5').at(1).hasClass('text-hidden')).toBe(true);
  });

  it('initializes the `reveal` state to be `false`', () => {
    expect(clueWrapper.state().revealed).toBe(false);
  });

  describe('when rendering a clue with no value', () => {
    beforeEach(() => {
      props.clue.value = undefined;

      clueWrapper = shallow(<Clue {...props}/>);
    });
    it('displays the value as `unknown`', () => {
      expect(clueWrapper.find('h4').text()).toEqual('unknown');
    });
  });



  describe('when clicking on the clue', () => {
    beforeEach(() => {
      clueWrapper.simulate('click');
    });

    it('updates the state to reveal the answer', () => {
      expect(clueWrapper.state().revealed).toBe(true);
    });

    it('renders the answer', () => {
      expect(clueWrapper.find('h5').at(1).hasClass('text-revealed')).toBe(true);
    });
  });

});
