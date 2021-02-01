var apiai = require('apiai');


//API Key
var app = apiai('47b0b1fef83f44498191e9e7cd5cb95c');
// aceed2efd1bfb7a3801acf01f41852b58cf2cd34	

// Function which returns speech from dialogflow
var getRes = function(query) {
  var request = app.textRequest(query, {
      sessionId: '<unique session id>'
  });
const responseFromAPI = new Promise(
        function (resolve, reject) {
request.on('error', function(error) {
    reject(error);
});
request.on('response', function(response) {
  resolve(response.result.fulfillment.speech);
});
});
request.end();
return responseFromAPI;
};

// test the command :
//getRes('hello').then(function(res){console.log(res)});

module.exports = {getRes}
