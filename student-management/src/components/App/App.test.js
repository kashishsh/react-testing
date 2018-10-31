import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = mount(<App />);

  it('render the heading', () => {
    expect(app.find('h2').text()).toEqual('Student Management');
  })
});
