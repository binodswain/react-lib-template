import React from 'react';
import RootComponent from './';
import TestRenderer from 'react-test-renderer';

describe('React FAQ component', () => {
  const testRenderer = TestRenderer.create(
    <Faq data={data}/>
  );

  it('is truthy', () => {
    expect(RootComponent).toBeTruthy()
  })
})
