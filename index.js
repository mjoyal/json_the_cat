const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

const printBreed = function (error, desc) {
  if(error) {
    console.log('fetch details error:', error); 
  } else {
    console.log(typeof desc); 
    console.log('cat description:', desc); 
    return desc; 
  }
}; 

fetchBreedDescription(breedName, printBreed); 


