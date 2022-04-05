// npm -> "node package manager"
// local dependency: npm i <packageName>
// local dependency: npm install -g <packageName>
// package.json -> stores important info about project/package
// npm init
// npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,3,[4]]];

const newItems = _.flattenDeep(items);

console.log(newItems);