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

export const games = (question, answer, raund = 3) => {
  for (let i = 0; i <= raund; i += 1) {
    console.log(question);
    if (question === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${getUserName()}!`);
    }
  }
  return console.log(`Congratulations, ${getUserName()}!`);
};
