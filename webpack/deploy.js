var path = require('path');
var fs = require('fs');
var index = require('./routers.deploy.json').index;

var html = fs.readFileSync(path.join(__dirname, '..', '/root/dist/', index));

fs.writeFileSync(path.join(__dirname, '..', '/root/dist/', 'index.html'), html);
