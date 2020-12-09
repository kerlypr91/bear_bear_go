import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

test('Button match snapshot', () => {
  const clickSpy = jest.fn()
  const preventSpy = jest.fn()

  const component = renderer.create(
    <Button label="test" onClick={clickSpy} />
  )

  // base snapshot

  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()

  // onClick prop gets called when button is cliked

  tree.props.onClick({ preventDefault: preventSpy })

  expect(preventSpy).toHaveBeenCalled()
  expect(clickSpy).toHaveBeenCalled()
});