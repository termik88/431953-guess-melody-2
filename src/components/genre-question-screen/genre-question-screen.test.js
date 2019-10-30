import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen';

describe(`SnapShot test GenreQuestionScreen`, () => {
  it(`Is correctly renders after relaunch`, () => {
    const mockDate = {
      onAnswer: jest.fn(),
      screenIndex: 0,
      question: {
        type: `genre`,
        genre: `rock`,
        answers: [
          {
            src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
            genre: `rock`,
          },
          {
            src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
            genre: `pop`,
          },
          {
            src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
            genre: `jazz`,
          },
          {
            src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
            genre: `rock`,
          },
        ],
      }
    };

    const test = renderer
      .create(<GenreQuestionScreen
        {...mockDate}
      />)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
