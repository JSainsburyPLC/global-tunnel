//Requires to npm install node-fetch

var fetch = require('node-fetch'),
    globalTunnel = require('./index');

globalTunnel.initialize();

var externalUrl = 'http://private-a6e70-texanpostcode.apiary-mock.com/api/postcode/test';

var internalUrl = 'http://texan.internal:8004/api/basket';

fetch(externalUrl)
.then(function(res) {
  return res.text();
})
.then(function(res) {
  console.log('External request worked?', res);
})
.catch(function(err) {
  console.log('External request failed', err);
});

fetch(internalUrl)
.then(function(res) {
  return res.text();
})
.then(function(res) {
  console.log('Internal request worked?', res);
})
.catch(function(err) {
  console.log('Internal request failed', err);
});
