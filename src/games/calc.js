import gameEngine from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const gameDescription = 'What is the result of the expression?';

const getRandomOperators = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const calculation = (num1, num2, operator) => {
  let answer = '';
  switch (operator) {
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
      throw new Error(`Operator ${operator} - doesn't supported`);
  }

  return answer;
};

const generateRound = () => {
  const num1 = getRandomInRange(0, 10);
  const num2 = getRandomInRange(0, 10);
  const operator = getRandomOperators();

  const question = String(`${num1} ${operator} ${num2}`);
  const answer = String(calculation(num1, num2, operator));

  return [question, answer];
};

export default () => {
  gameEngine(gameDescription, generateRound);
};
