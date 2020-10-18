var http = require('http');
var moment = require('moment');

function serverCallback(req, res) {
  var begin_time = moment('10:00', 'HH:mm');
  var end_time = moment('18:00', 'HHmm');

  var message = 'Hello !\n';
  message += 'Welcome to our page. \n';
  message += 'Now, it is ' + moment().format('HH:mm') + '\n';
  message +=
    'Our business hours are from ' +
    begin_time.format('HHmm') +
    ' to ' +
    end_time.format('HHmm');

  var begin_difference = begin_time.diff(moment(), 'minutes');
  var end_difference = moment().diff(end_time, 'minutes');

  // Modified answer with if/elseif/else instead of 2 if
  if (begin_difference > 0) {
    message += '\nPlease come back in ' + begin_difference + ' minutes.\n';
  } else if (end_difference > 0) {
    message += '\nPlease come tomorrow.';
  } else {
    message += '\nHow can we help you?';
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(message);
}

http.createServer(serverCallback).listen(8080);
