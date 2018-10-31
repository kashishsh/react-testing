import React from 'react';
import { mount } from 'enzyme';
import Note from './Note';

const props = { note: { text: 'Test note' } };
console.log({ ...props });

const TriplePrint = (a, b, c) => {
  console.log(`${a} ${b} ${c}`);
}
const message = ['React', 'is', 'awesome'];

TriplePrint(...message)

describe('Note', () => {
  let note = mount(<Note {...props} />);

  it('renders the note text', () => {
    expect(note.find('p').text()).toEqual(props.note.text);
  });
});
