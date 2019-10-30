import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionScreen from './artist-question-screen';

Enzyme.configure({adapter: new Adapter()});

describe(`E2e test ArtistQuestionScreen`, () => {
  it(`Is correctly call callback on user answer`, () => {
    const mockDate = {
      onAnswer: jest.fn(),
      screenIndex: 0,
      question: {
        type: `artist`,
        song: {
          artist: `Jim Beam`,
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        },
        answers: [
          {
            picture: `http://placehold.it/134x134`,
            artist: `John Snow`,
          },
          {
            picture: `http://placehold.it/134x134`,
            artist: `Jack Daniels`,
          },
          {
            picture: `http://placehold.it/134x134`,
            artist: `Jim Beam`,
          },
        ],
      }
    };

    const artistQuestionScreen = shallow(<ArtistQuestionScreen
      {...mockDate}
    />);

    const answerForm = artistQuestionScreen.find(`.game__artist`);
    answerForm.simulate(`change`);

    expect(mockDate.onAnswer).toHaveBeenCalledTimes(1);
  });
});
