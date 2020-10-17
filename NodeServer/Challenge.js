/** ----- CHALLENGE ----- **/

var http = require('http');
var moment = require('moment');

function serverCallback(req, res) {
  var message;
  console.log(moment().hour());
  if (moment().hour() >= 15 && moment().hour() < 16) {
    message = 'How can we help you?';
  } else {
    message = 'Sorry please come back during work hours.';
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(
    'Hello Noah.\nWelcome to your time page.\nNow, it is ' +
      moment().format('LTS') +
      '\nOur business hours is from 3:00 to 4:00.\n' +
      message
  );
}

http.createServer(serverCallback).listen(8080);
