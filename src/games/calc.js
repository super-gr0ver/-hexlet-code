
import gameEngine from '../index.js';
import  getRandomInRange  from '../randomizer.js';

export const сalc = () => {
  const gameDescription = () => 'Answer "yes" if the number is even, otherwise answer "no".';
  
    let count = '';
    const num1 = getRandomInRange(0, 10);
    const num2 = getRandomInRange(0, 10);
    const index = getRandomInRange(0, 3);
    const operators = ['+', '-', '*'];

    console.log(`Question: ${num1} ${operators[index]} ${num2}`);
    const userAnswer = Number(getAnswer());

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
  
};
