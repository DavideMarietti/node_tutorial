const path = require('path');

console.log(path.sep);

const filePath = path.join('/.');

console.log(filePath);

const base = path.basename(filePath);

console.log(path.resolve(__dirname));