import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './index';

test('Footer match snapshot', () => {
  const component = renderer.create(
    <Footer />
  )

  // base snapshot

  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
});