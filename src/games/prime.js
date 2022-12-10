import gameEngine from '../index.js';
import getRandomInRange from '../randomizer.js';

const gameDescription = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameTask = () => {

};

export default () => {
  gameEngine(gameDescription, gameTask);
};
