// npm -> "node package manager"
// local dependency: npm i <packageName>
// local dependency: npm install -g <packageName>
// package.json -> stores important info about project/package -> npm install to install all dependences once a project is cloned
// npm init
// npm init -y (everything default)

const { readFile } = require('fs');

console.log('Started first task');

readFile ('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
})

console.log('starting second task');


//______________//


console.log('first');

setTimeout(() => {
    console.log('second');
}, 0);

console.log('third');