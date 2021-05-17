const {readFileSync, writeFileSync} = require('fs')
console.log('start');
// read file
const first = readFileSync('./content/first.txt', 'utf8') // provide path and content, and second parameter is encoding
const second = readFileSync('./content/subfolder/second.txt', 'utf8') // also can be "./content/second.txt"

// console.log(first, second)

// create a new file

// 2 arguments - (file name, path) and (the value we wanna pass).

// writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`)

// to append to an already existing file, put another parameter, which is {flag: 'a'}

writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`, {flag: 'a'})
console.log('Done with the task')
console.log('Starting the new task')