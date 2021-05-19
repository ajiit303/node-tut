const {readFile, writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
// limes 2, 3, and 4 can be also eliminated and 1 can be written as this:
// const {readFile, writeFile} = require('fs').promises;
// In that case, lines 11, 12, and 13 become readFile, readFile, writeFile, cause lines 3, and 4 are eliminated

const start = async() => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/subfolder/second.txt', 'utf8');
        await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`, {flag: 'a'})
        console.log(first, second)
    } catch (error) {
        console.log(error);
    }
}

start()

// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data)=> {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }

// const start = async() => {
//     try {
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/subfolder/second.txt');
//         console.log(first, second)
//     } catch (error) {
//         console.log(error);
//     }
// }

// getText('./content/subfolder/second.txt').then(result=> console.log(result)).catch((err)=> console.log(err))