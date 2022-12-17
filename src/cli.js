/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export const welcome = () => {
  const welcomeText = 'Welcome to the Brain Games!';
  console.log(`${welcomeText}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
