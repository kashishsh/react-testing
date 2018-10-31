import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { categories } from './../data/fixtures';

const props = {
  categories
};

describe('App', () => {
  const app = shallow(<App {...props}/>);

  it('renders the title', () => {
    expect(app.find('h2').text()).toEqual('Jeopardy!');
  });

  it('render the correct number of links', () => {
    expect(app.find('Link').length).toEqual(categories.length);
  });

  it('title the link correctly', () => {
    app.find('Link').forEach((link, index) => {
      expect(link.find('h4').text()).toEqual(categories[index].title);
    });
  })
});
