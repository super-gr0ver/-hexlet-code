/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
 const gameEngine = (description, task) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${description()}!`);

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const taskResult = task();
    console.log(`Question: ${taskResult[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = taskResult[1];

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
    }
  } console.log(`Congratulations, ${userName}!`);
};
export default gameEngine;
