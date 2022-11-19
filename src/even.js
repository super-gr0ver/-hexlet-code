/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const welcome = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};
console.log(`Hello, ${welcome()}!`);

export const game = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes' or 'no' .`);
    }

    let isEven = '';
    randomNumber % 2 === 0 ? isEven = 'yes' : isEven = 'no';
    if (isEven === userAnswer) {
      console.log('Correct!');
    } else {
      return `${userAnswer} is wrong answer ;(. Correct answer was ${isEven}.\n
      Let's try again, BILL!`;
    }
  }

  return 'Congratulations, BILL';
};
