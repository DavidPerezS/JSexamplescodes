const math = require('mathjs');
const prompt = require('prompt-sync')();

let points = 0;
let num = 0;
let rn = 0;
let result = 0;

const getPoints = () =>
  new Promise((resolve) => {
    if (num === rn) {
      points += 2;
      resolve(points);
      console.log('+2 points');
    } else if (num + 1 === rn || num - 1 === rn) {
      points += 1;
      resolve(points);
      console.log('+1 points');
    } else {
      console.log('+0 points');
      resolve(points);
    }
  });

const getResult = async () => {
  try {
    result = await getPoints();
    return `With the last input value: ${num} we now have ${result} points`;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const continueGame = () =>
  new Promise((resolve) => {
    const play = prompt('Play again y/n: ');
    const playStatus = play !== 'n';
    resolve(playStatus);
  });

function randomNumber(min, max) {
  return math.floor(math.random() * (max - min + 1) + min);
}

const handleGame = async () => {
  try {
    num = Number(prompt('Insert a number from 1 to 6: '));
    console.log(`Input number was: ${num}`);
    if (num > 6 || num < 1) {
      throw new Error('Invalid number');
    }
    rn = randomNumber(1, 6);
    console.log(`Random number is equal to: ${rn}`);
    await getResult()
      .then((msg) => {
        console.log('WELL PLAYED!!');
        console.log(msg);
      })
      .catch((err) => {
        console.log(err);
      });
    const isContinuing = await continueGame();
    if (isContinuing) {
      handleGame();
    } else {
      console.log('Game Over');
    }
  } catch (error) {
    console.log('Invalid number');
  }
};

handleGame();
