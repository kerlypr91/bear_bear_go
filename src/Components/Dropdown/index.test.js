import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from './index';

test('Dropdown match snapshot', () => {
  const defaultSpy = jest.fn()
  const onChangeSpy = jest.fn()

  const props = {
    placeholder: 'test',
    options: ['a', 'b'],
    className: '',
    onChange: onChangeSpy,
    value: 'a'
  }

  const component = renderer.create(
    <Dropdown {...props} />
  )

  // base snapshot

  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()

  // onChange prop gets called when a different dropdown value is selected

  tree.props.onChange({ preventDefault: defaultSpy }, 'b')

  expect(defaultSpy).toHaveBeenCalled()
  expect(onChangeSpy).toHaveBeenCalledWith('b')
});