import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './index';

test('Loader match snapshot', () => {
  const component = renderer.create(
    <Loader />
  )

  // base snapshot

  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
});