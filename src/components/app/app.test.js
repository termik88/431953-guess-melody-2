import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

describe(`SnapShot test App`, () => {
  it(`App is correctly renders after relaunch`, () => {
    const test = renderer
      .create(<App
        gameTime = {0}
        errorCount = {0}
        onClick = {jest.fn()}
      />)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
