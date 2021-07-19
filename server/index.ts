const randomer = require('complete-randomer');
const { ONE_SECOND } = require('@ricjd/time')

console.log('starting');

function myCall () {
  const name = randomer.STRING.NAMES(1);
  console.log(`hello ${name}`);
  setTimeout(myCall,  ONE_SECOND);
}

setTimeout(myCall,  ONE_SECOND);