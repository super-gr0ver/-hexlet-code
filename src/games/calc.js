import gameEngine from '../index.js';
import getRandomInRange from '../randomizer.js';

const gameDescription = () => 'What is the result of the expression?';
const gameTask = () => {
  let answer = '';
  const num1 = getRandomInRange(0, 10);
  const num2 = getRandomInRange(0, 10);
  const index = getRandomInRange(0, 2);
  const operators = ['+', '-', '*'];
  const question = String(`${num1} ${operators[index]} ${num2}`);

  switch (operators[index]) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
  }
  return [question, String(answer)];
};

export default () => {
  gameEngine(gameDescription, gameTask);
};
