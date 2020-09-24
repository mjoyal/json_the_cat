const request = require('request');
const catQuery = process.argv[2];
const breeds = `https://api.thecatapi.com/v1/breeds/search?q=${catQuery}`;

request(breeds, (error, response, body) => {
  if (error) {
    return console.error('error:', error);
  } // Print the error if one occurred
  const breedData = JSON.parse(body);
  if (!breedData.length) {
    return console.log('Breed not found');
  }
  console.log(breedData[0].description);
});
