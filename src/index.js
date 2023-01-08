import readlineSync from 'readline-sync';

const gameEngine = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const greenColor = '\x1b[32m';
  const redColor = '\x1b[31m';
  const rounds = 3;

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${description}!`);

  for (let i = 0; i < rounds; i += 1) {
    const [outQuestion, outAnswer] = generateRound();
    console.log(`Question: ${outQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = outAnswer;

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(redColor, `"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
    }
  } return console.log(greenColor, `Congratulations, ${userName}!`);
};
export default gameEngine;
