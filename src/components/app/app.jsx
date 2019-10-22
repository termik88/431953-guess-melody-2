import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {gameTime, errorCount, onClick} = props;

  return <WelcomeScreen
    gameTime = {gameTime}
    errorCount = {errorCount}
    onClick = {onClick}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default App;
