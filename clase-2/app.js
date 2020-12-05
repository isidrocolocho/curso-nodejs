const http = require("http");

const server = http.createServer((rep,res)=>{
    res.writeHead(200,{"Contect-Type":"application/json"})
    res.write('{mensaje:"Hola me llamastes?"}');
    res.end();
})

server.listen(8080);