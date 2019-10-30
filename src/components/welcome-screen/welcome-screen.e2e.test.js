import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`E2e test WelcomeScreen`, () => {
  it(`WelcomeScreen is correctly rendered after relaunch`, () => {
    const mockDate = {
      gameTime: 0,
      errorCount: 0,
      onClick: jest.fn()
    };

    const welcomeScreen = shallow(<WelcomeScreen
      {...mockDate}
    />);

    const startButton = welcomeScreen.find(`button`);
    startButton.simulate(`click`);

    expect(mockDate.onClick).toHaveBeenCalledTimes(1);
  });
});
