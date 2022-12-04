import gameEngine from '../index.js';
import getRandomInRange from '../randomizer.js';

const gameDescription = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (checkNumber) => {
  const result = checkNumber % 2 === 0;
  return result;
};

const gameTask = () => {
  const randomNumber = getRandomInRange(0, 10);
  let answer = '';
  answer = (isEven(randomNumber) === true) ? answer = 'yes' : answer = 'no';
  const question = String(randomNumber);
  return [question, answer];
};

export default () => {
  gameEngine(gameDescription, gameTask);
};
