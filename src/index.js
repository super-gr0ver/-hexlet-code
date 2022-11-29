/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const welcomeName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${welcomeName}!`);
  return welcomeName;
};

export const getAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const userName = getUserName();
export const games = (question, answer, name = userName) => {
  if (question === answer) {
    console.log('Correct!');
  } else {
    return console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
  }
};
