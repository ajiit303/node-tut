const EventEmitter = require('events');

const customEmitter = new EventEmitter()

// on - listens for an event
// emit - emits an event

customEmitter.on('response',()=>{
    console.log(`data received`);
})

customEmitter.on('response',()=>{
    console.log(`some other logic here`);
})

customEmitter.emit('response')

customEmitter.on('example', (name, id)=>{
    console.log(`data received for ${name} with id:${id}`)
})

customEmitter.emit('example','John',34)