/* eslint-disable linebreak-style */
const axios = require('axios');
const prompt = require('prompt-sync')();
const fs = require('fs');

const getJoke = async (searchParam) => {
  const header = {
    headers: { Accept: 'text/plain' },
  };
  try {
    return await axios.get(
      `https://icanhazdadjoke.com/search?term=${searchParam}`,
      header,
    );
  } catch (error) {
    console.error(error);
    return error;
  }
};

function countOccurences(string, word) {
  return string.split(word).length - 1;
}

const searchJoke = async () => {
  try {
    const searchParam = prompt('Input search term for jokes: ');
    console.log(`Input search parameter was: ${searchParam}
     `);
    await getJoke(searchParam)
      .then((res) => {
        if (res.status === 200) {
          const response = res.data; // text/plain no need to stringify
          console.log(response);
          console.log(
            `\nThe search parameter got: ${countOccurences(
              response,
              searchParam,
            )} results`,
          ); // 2
          fs.appendFile('jokes.txt', response, (err) => {
            if (!err) {
              console.log('New joke(s) appended to the jokes.txt');
            }
          });
        }
        console.log(`Status= ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(' No jokes were found for the input terms, try again. ');
  }
};

searchJoke();
