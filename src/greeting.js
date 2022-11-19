/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

const welcomeText = 'Welcome to the Brain Games!';

export const welcome = () => {
  const name = readlineSync.question('May I have your name? ');

  return name;
};

console.log(`${welcomeText}`);
