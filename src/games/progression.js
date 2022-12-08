import gameEngine from '../index.js';
import getRandomInRange from '../randomizer.js';

const gameDescription = () => 'What number is missing in the progression?';
const gameTask = () => {
  const arrLength = getRandomInRange(5, 10);
  const randomIndex = getRandomInRange(0, 10);
  console.log(randomIndex)
  const arrResult = [];
  for (let index = 0; index < arrLength; index += 1) {
    arrResult.push(getRandomInRange(0, 10))
  }
  arrResult[randomIndex] = ".."
  return arrResult;
}
};

export default () => {
  gameEngine(gameDescription, gameTask);
};
