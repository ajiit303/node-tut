// HAVING PACKAGE.JSON IS REALLY REALLY CRUCIAL!!!!!

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project [Used more often]
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (Mac)

//package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init(step by step, press enter to skip)
// npm init -y (everything default)

// Dev dependency
// npm i nodemon -D or npm i nodemon --save-dev
// NODEMON RESTARTS THE APP.
// SCRIPT in package.json is important. We can either simply run commands like "node start", or in some cases
// we might need to use "npm run nameOfCommand", like "npm run dev"
// CTRL+C to exit nodemon

// Uninstalling a package
// npm uninstall packageName
// nuclear approach is to delete the node_modules folder and the "package-lock.json", and manually delete
// the package from the dependencies in the "package.json", followed by npm install

const _ = require('lodash');

const items = [1, [2,[3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems);
console.log('Hello people');