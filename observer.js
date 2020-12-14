// importa o modulo de eventos
var events = require('events');

//cria o objeto emissor de eventos
var eventEmitter = new events.EventEmitter();

// cria um manipulador de evento chamado listener1
var listener1 = function listener1() {
    console.log('listener1 executed.');
}

// cria um manipulador de evento chamado listener2
var listener2 = function listener2() {
    console.log('listener2 executed.');
}

//adiciona por meio do emissor de eventos uma extremidade connection, que aciona o manipulador 1
eventEmitter.addListener('connection', listener1);

// adiciona por meio do emissor de eventos uma extremidade connection, que aciona o manipulador 1
eventEmitter.on('connection', listener2);

// conta quantidade de ouvintes
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(eventListeners + " Listener(s) listening to connection event");
//emite evento connection
eventEmitter.emit('connection');

// remove listener1 (manipulador) do evento connection, restando somente o listener2
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now.");

//emite evento connection
eventEmitter.emit('connection');

// conta listeners
// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

console.log("Program Ended.");
