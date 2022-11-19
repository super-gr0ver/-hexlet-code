/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export const game = () => {
  const answerText = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomNumber = Math.floor(Math.random() * 10);
  console.log(`${answerText}\nQuestion: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer != 'yes' || userAnswer != 'no') {
    return `${userAnswer} is wrong answer ;(. Correct answer was 'yes' or 'no' .`;
  }

  // let i = 0;
  // while (i <= 3) {
  //   let correct = '';
  //   if (randomNumber % 2 === 0) {
  //     correct = 'yes';
  //   } else {
  //     correct = 'no';
  //   }
  //   i += 1;
  // }

  return userAnswer;
};
