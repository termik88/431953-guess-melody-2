import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

describe(`SnapShot test App`, () => {
  it(`App is correctly renders after relaunch`, () => {
    const mockDate = {
      gameTime: 0,
      errorCount: 0,
      questions: [
        {
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
        },
        {
          type: `genre`,
          genre: `folk`,
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
        }]
    };

    const test = renderer
      .create(<App
        {...mockDate}
      />)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
