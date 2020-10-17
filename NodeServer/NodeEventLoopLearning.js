// --save will add it to the package.json

var http = require('http');
var moment = require('moment');

function serverCallback(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(
    'Hello ' + process.argv[2] + '. It is ' + moment().format('LLLL') + ' now.'
  );
}

http.createServer(serverCallback).listen(8080);

// ----- ******* NODE EVENT LOOP ******* ----- //
/**
 * timers
 * I/O callbacks
 * idle, prepare
 * poll              <--- Inc: connections, data, etc.
 * check
 * close callbacks
 *
 */

// ----- Timers ----- //
/**
 * Timer callbacks
 * - setTimeout() - give a callback will execute after X amount of time
 * - setInterval() - will execute a callback every X amount of itme
 */

// ----- I/O Callbacks ----- //
/**
 * Execute callbacks for system operations
 * - TCP errors
 */

// ----- Idle, prepare ----- //
/**
 * Used only internally
 */

// ----- Poll Phase ----- /
/**
 * - Execute callbakcs from timer events
 * - Process other events, also check for http req / client req
 * - Check setImmediate() events
 * - Wait for further events
 */

// ----- Check phase ------ //
/**
 * setImmediate() events
 */

// ----- close Callbacks ------ //
/**
 * - Execute close callbacks
 * - Socket or handle closed abruptly
 */

// ----- Process.nextTick() ------ //
/**
 *
 * - Special event
 * - Executed after the current operation completes
 * - regardless of current phase
 * - Use is not recommended
 */
