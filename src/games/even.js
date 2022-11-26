/* eslint-disable import/prefer-default-export */

import { getUsername, getAnswer } from '../index.js';

const welcomeName = getUsername();
console.log(`Hello, ${welcomeName}!`);

export const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const countRaund = 3;

  for (let i = 1; i <= countRaund; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);

    const userAnswer = getAnswer();
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes' or 'no' .`);
    }

    let isEven = '';
    isEven = (randomNumber % 2 === 0) ? isEven = 'yes' : isEven = 'no';
    if (isEven === userAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven}'.\nLet's try again, ${welcomeName}!`);
    }
  }
  return console.log(`Congratulations, ${welcomeName}!`);
};
