const request = require('request');
request('https://examle.edu/', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log(body); // Print the HTML for the Google homepage.
  
});
// let content = body
// console.log(content)