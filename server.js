var express = require('express');
var request = require('request')

var app = express();

module.exports = function(config) {
  var apikey = config.apikey;
  var port = config.port;

  app.use('/api/1.0/*', function(req, res, next) {
    var url = 'https://app.asana.com/' + req.originalUrl;
    var options = { 
      url: url,
      auth: {
        username: apikey,
        password: ''
      }  
    }
    req.pipe(request(options)).pipe(res);
  });

  app.set('port', port);
  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
}
