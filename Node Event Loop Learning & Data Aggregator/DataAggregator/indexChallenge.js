/**
 * Challenge Description: Add HTML file and serve it through Node.js. Also add CSS file to HTML file to stylize table.
 *
 * Issues that were solved:
 * 1) I have autofill/autosave which added element end tags automatically on save. So I had to find a way to insert the table data into existing HTML file that was read.
 * 2) Tried JSON, but didn't work, so I had to replace some of the data with the new table data.
 * 3) CSS wasn't working, because it was being served as text/html, so I added another if statement to add CSS if it was caught in the URL.
 * 4) CSS wasn't served immediately, so I moved the if statement with a check for URLS inside the request body.
 *
 */
var http = require('http');
var request = require('request');
var fs = require('fs');
var path = require('path');

var request_body;

function createHtmlStringFromJson(retrievedData) {
  var html_string = '<tr>\n';
  for (var attribute in retrievedData[0]) {
    if (typeof retrievedData[0][attribute] !== 'object') {
      html_string += '<td>' + attribute + '</td>\n';
    }
  }
  html_string += '</tr>\n';

  retrievedData.forEach(function (object) {
    html_string += '<tr>\n';
    for (var attribute in object) {
      if (typeof object[attribute] !== 'object') {
        html_string += '<td>' + object[attribute] + '</td>\n';
      }
    }
    html_string += '</tr>\n';
  });

  return html_string;
}
request('http://www.trumba.com/calendars/brisbane-city-council.json', function (
  error,
  request_res,
  body
) {
  request_body = body;
});

http
  .createServer(function (req, res) {
    if (request_body) {
      if (req.url === '/') {
        fs.readFile('index.html', 'utf8', function (err, data) {
          if (err) {
            return console.log(err);
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          var tableData = createHtmlStringFromJson(JSON.parse(request_body));
          data = data.replace(/\<\/table>/g, tableData + '</table>');
          res.write(data);
          res.end();
        });
      } else if (req.url.match('.css$')) {
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, 'UTF-8');
        res.writeHead(200, { 'Content-Type': 'text/css' });
        fileStream.pipe(res);
      }
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Nothing retrieved yet');
    }
  })
  .listen(8080);
