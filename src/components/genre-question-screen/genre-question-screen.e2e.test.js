import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from './genre-question-screen';

Enzyme.configure({adapter: new Adapter()});

describe(`E2e test GenreQuestionScreen`, () => {
  it(`Is correctly call callback on user answer`, () => {
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

    const genreQuestionScreen = shallow(<GenreQuestionScreen
      {...mockDate}
    />);

    const answerForm = genreQuestionScreen.find(`.game__tracks`);
    answerForm.simulate(`submit`, {preventDefault: jest.fn()});

    expect(mockDate.onAnswer).toHaveBeenCalledTimes(1);
  });
});
