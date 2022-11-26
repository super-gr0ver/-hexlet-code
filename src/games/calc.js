/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export const getCalc = () => {
  let count = '';
  for (let i = 0; i < 3; i += 1) {
    const num1 = Math.trunc(Math.random() * 10);
    const num2 = Math.trunc(Math.random() * 10);

    const index = Math.trunc(Math.random() * 3);
    const operators = ['+', '-', '*'];

    console.log(`Question: ${num1} ${operators[index]} ${num2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    switch (operators[index]) {
      case '+':
        count = num1 + num2;
        if (count === userAnswer) {
          console.log('Correct!');
        } else {
          return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${count}'.\nLet's try again, !`);
        }
        break;
      case '-':
        count = num1 - num2;
        if (count === userAnswer) {
          console.log('Correct!');
        } else {
          return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${count}'.\nLet's try again, !`);
        }
        break;
      case '*':
        count = num1 * num2;
        if (count === userAnswer) {
          console.log('Correct!');
        } else {
          return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${count}'.\nLet's try again, !`);
        }
        break;
      default:

        break;
    }
  }
  return console.log('Congratulations, ___!');
};
