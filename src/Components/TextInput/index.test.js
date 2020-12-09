import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './index';

test('Dropdown match snapshot', () => {
  const onChangeSpy = jest.fn()

  const props = {
    placeholder: 'test',
    loading: false,
    className: '',
    onChange: onChangeSpy,
    value: 'a'
  }

  const component = renderer.create(
    <TextInput {...props} />
  )

  // base snapshot

  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()

  // onChange prop gets called when a different text value is typed

  const input = tree.children[0]

  input.props.onChange()

  expect(onChangeSpy).toHaveBeenCalled()
});