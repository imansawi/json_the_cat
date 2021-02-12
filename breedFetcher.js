const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breed}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      const msg = 'That cat does not exist!';
      callback(Error(msg), null);
      return;
    }
    if (data[0]) {
      callback(null, data[0].description);
    }
  })
};

//fetchBreedDescription();

module.exports = { fetchBreedDescription };