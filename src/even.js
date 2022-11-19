/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export const game = () => {
  const answerText = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomNumber = Math.floor(Math.random() * 10);
  console.log(`${answerText}\nQuestion: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};
