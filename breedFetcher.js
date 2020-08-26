const catName = process.argv[2];
const request = require('request');
const url = `https://api.thecatapi.com/v1/breeds/search?q=${catName}`;
request(url,(error,response,body) => {

  if (error) {
    console.log(error);
    return;
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});