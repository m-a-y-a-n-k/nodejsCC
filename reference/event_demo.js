const EventEmitter = require('events');

class Emitter extends EventEmitter { }

const mEmitter = new Emitter();

mEmitter.on('special', () => {
    console.log('Event fired');
})

mEmitter.emit('special');