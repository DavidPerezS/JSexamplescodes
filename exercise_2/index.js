const axios = require('axios');

const getInformation = async () => {
  try {
    return await axios.get('https://restcountries.eu/rest/v2/alpha/col', {
      responseType: 'json',
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};

const information = async () => {
  await getInformation()
    .then((res) => {
      if (res.status === 200) {
        console.log(JSON.stringify(res.data));
      }
      console.log(res.status);
    })
    .catch((err) => {
      console.log(err);
    });
};

information();
