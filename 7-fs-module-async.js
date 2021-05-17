const {readFile, writeFile} = require('fs')

// (err, result)=>{} is a callback function used in async
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if (err) {
        console.log(err)
        return
    }
    else {
        const first = result;
        readFile('./content/subfolder/second.txt', 'utf8', (err, result)=>{
            if (err) {
                console.log(err)
                return;
            }
            else {
                const second = result
                writeFile('./content/result-async.txt', `Here is the result ${first}, ${second}`,(err, result)=> {
                    if (err) {
                        console.log(err)
                        result;
                    }
                    else {
                        console.log('Done with this task')
                    }
                })
            }
        })
    }
})

console.log('Starting next task')