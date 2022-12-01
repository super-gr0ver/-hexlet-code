/* eslint-disable import/prefer-default-export */
import  gameEngine  from '../index.js';
import  getRandomInRange  from '../randomizer.js';

const even = () => {
  const gameDescription = () => 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEven = (checkNumber) => {
    let result = '';
    // eslint-disable-next-line no-unused-expressions
    (checkNumber % 2 === 0) ? result = 'yes' : result = 'no';
    return result;
  };

  const gameTask = () => {
    const randomNumber = getRandomInRange (0, 10);
    const answer = isEven(randomNumber);
    const question = String(randomNumber);
    return [question, answer];
  };

  const startGame = () => {
    gameEngine(gameDescription, gameTask);
  };
  startGame();
};
export default even;
