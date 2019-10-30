import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

describe(`SnapShot test WelcomeScreen`, () => {
  it(`Is correctly renders after relaunch`, () => {
    const mockDate = {
      gameTime: 0,
      errorCount: 0,
      onClick: jest.fn()
    };

    const test = renderer
      .create(<WelcomeScreen
        {...mockDate}
      />)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
