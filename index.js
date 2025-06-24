const http = require('http'); 
const fs = require('fs');

const server = http.createServer((req, res) =>{
    console.log("Got a new request");
});

server.listen(3030, () => {
    console.log("Server is listening to port 3030");
})