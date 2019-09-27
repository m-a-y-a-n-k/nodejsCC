const Person = require('./person');
const Logger = require('./logger');

const person = new Person('John Doe', 30);
person.greeting();

const logger = new Logger();

logger.on('message', (data) => {
    console.log('Called Listener: ', data);
});

logger.log('I love kites');