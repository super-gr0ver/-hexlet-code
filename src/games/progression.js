import gameEngine from '../index.js';
import getRandomInRange from '../randomizer.js';

const gameDescription = () => 'What number is missing in the progression?';
const gameTask = () => {

};

export default () => {
  gameEngine(gameDescription, gameTask);
};
