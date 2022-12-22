import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const gameEngine = (description, task) => {
  const greenColor = '\x1b[32m';
  const redColor = '\x1b[31m';
  const rounds = 3;

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${description()}!`);

  for (let i = 0; i < rounds; i += 1) {
    const taskResult = task();
    console.log(`Question: ${taskResult[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = taskResult[1];

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(redColor, `"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
    }
  } return console.log(greenColor, `Congratulations, ${userName}!`);
};
export default gameEngine;
