import gameEngine from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameTask = () => {
  let answer = 0;
  let num1 = getRandomInRange(0, 100);
  let num2 = getRandomInRange(0, 100);
  const question = String(`${num1} ${num2}`);

  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
      answer = String(num1);
    } else {
      num2 -= num1;
      answer = String(num2);
    }
  } return [question, answer];
};

export default () => {
  gameEngine(gameDescription, gameTask);
};
