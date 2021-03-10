const axios = require('axios');
const { get } = require('prompt');

const getInformation = async () => {
  try {
    return await axios.get('https://restcountries.eu/rest/v2/alpha/col', {
      responseType: 'json',
    });
  } catch (error) {
    console.error(error);
  }
};

const information = async () => {
  const info = getInformation()
    .then(function (res) {
      if (res.status == 200) {
        console.log(res.data);
      }
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
};

information();
