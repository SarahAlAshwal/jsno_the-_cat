const request = require('request');
const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url,(error,response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback('Error in url',null);
    } else if (data.length === 0){
        callback("doesn't exist",null);
      } else {
      const data = JSON.parse(body);
      callback(null,data[0].description);
    }
  });
};
module.exports = {fetchBreedDescription};
