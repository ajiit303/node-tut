const { Console } = require('console')
const path = require('path')

//Very important property - separator property. Returns a platform specific separator.
console.log(path.sep) // returns "/" or "\"

// .join joins a sequence of path segments using the platform specific separator.
// returns a normalized path

const filePath = path.join('/content', '/subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath) // returns the basic file in the pathFile

console.log(base)

// returns an absolute value of the path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)