/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const getUsername = () => {
  const welcomeName = readlineSync.question('May I have your name? ');
  return welcomeName;
};

export const getAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};
