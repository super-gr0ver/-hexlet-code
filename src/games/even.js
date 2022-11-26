/* eslint-disable import/prefer-default-export */
import { getUserName, getAnswer, games } from '../index.js';

getUserName();
export const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getQuestion = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    console.log(`Question: ${randomNumber}`);
    let isEven = '';
    isEven = (randomNumber % 2 === 0) ? isEven = 'yes' : isEven = 'no';
    return isEven;
  };

  const getUserAnswer = () => {
    const userAnswer = getAnswer();
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes' or 'no' .`);
    } return userAnswer;
  };
  return games(getQuestion(), getUserAnswer());
};
