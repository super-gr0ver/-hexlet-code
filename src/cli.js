import readlineSync from 'readline-sync';
export const welcomeName = () => {
  const name = readlineSync.question('May I have your name?');
  return name;
}