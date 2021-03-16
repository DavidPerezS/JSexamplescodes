const axios = require('axios');

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
      if (res.status === 200) {
        console.log(JSON.stringify(res.data));
      }
      console.log(res.status);
    })
    .catch(function (err) {
      console.log(err);
    });
};

information();
