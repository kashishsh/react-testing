import React from 'react';
import { shallow } from 'enzyme';
import { StackList } from './StackList';
import { stacks } from './../data/fixtures';
import { WSAEPROTONOSUPPORT } from 'constants';

const props = {
  stacks
}
describe('StackList', () => {
  const stackList = shallow(<StackList {...props}/>);

  it('should render the correct number of link to the stacks', () => {
    console.log(stackList.debug());
    expect(stackList.find('Link').length).toEqual(2);
  });
});
