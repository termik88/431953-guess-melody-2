import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

describe(`SnapShot test WelcomeScreen`, () => {
  it(`WelcomeScreen is correctly renders after relaunch`, () => {
    const test = renderer
      .create(<WelcomeScreen
        gameTime = {0}
        errorCount = {0}
        onClick = {jest.fn()}
      />)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
