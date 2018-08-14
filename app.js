var redis_cli = require('./redis_cli');
var MySQLEvents = require('mysql-events');

// MySQL Connection
var connection = {
  host:     'localhost',
  user:     'root',
  password: '',
  /* debug: true */
};

var mysqlEventWatcher = MySQLEvents(connection);

mysqlEventWatcher.add('simple_app.image', function (oldRow, newRow, event) {
  if (oldRow === null) {
    console.log(newRow.fields);
  }

   //row deleted
  if (newRow === null) {
    console.log(oldRow.fields.id);
  }

   //row updated
  if (oldRow !== null && newRow !== null) {
    console.log(newRow.fields);
  }
});