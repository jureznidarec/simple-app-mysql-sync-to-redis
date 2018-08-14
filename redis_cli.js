const redis = require('redis');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis);

let client = redis.createClient();

client.on('connect', function(){
    console.log('Connected to Redis ...');
});

client.on('error', function(err) {
    console.log('Error connecting Redis: ' + err.code);
});

module.exports = client;    