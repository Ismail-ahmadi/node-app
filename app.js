const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello');
        res.end();
    }
});

server.on('connection', (socker) =>{
    console.log(" coming connectioon");
});
server.listen(3000);

console.log("Listeing to 3000");

// const EventEmitter = require('events');
// const emitter = new EventEmitter;

// emitter.on('Message', () => {
//     console.log("Hello");
// });
// emitter.emit('NewMessage');



// emiiter.