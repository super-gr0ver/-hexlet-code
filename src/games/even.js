/* eslint-disable import/prefer-default-export */
import { gameEngine } from '../index.js';

export const even = () => {
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameTask = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    let isEven = '';
    isEven = (randomNumber % 2 === 0) ? isEven = 'yes' : isEven = 'no';

    return [randomNumber, isEven];
  };

  gameEngine(gameQuestion, gameTask());
};
export default even;
