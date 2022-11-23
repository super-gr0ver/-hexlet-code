const getSum = () => {
  let count = '';
  for (let i = 0; i < 3; i++) {
    const num1 = Math.trunc(Math.random() * 100);
    const num2 = Math.trunc(Math.random() * 100);

    const index = Math.trunc(Math.random() * 3);
    const operators = ['+', '-', '*'];

    console.log(`Question: ${num1} ${operators[index]} ${num2}`);
    switch (operators[index]) {
      case '+':
        count = num1 + num2;
        const userAnswer = readlineSync.question('Your answer: ');
        if (count === userAnswer) {
          console.log('Correct!');
        } else {
          return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '-'.\nLet's try again, !`);
        }
        break;
      case '-':
        count = num1 - num2;
        if (count === userAnswer) {
          console.log('Correct!');
        } else {
          return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '-'.\nLet's try again, !`);
        }
        break;
      case '*':
        count = num1 * num2;
        if (count === userAnswer) {
          console.log('Correct!');
        } else {
          return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '-'.\nLet's try again, !`);
        }
        break;
      default:

        break;
    }
  }
  return count;
};
getSum();
