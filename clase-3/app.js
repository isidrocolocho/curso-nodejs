const http = require("http");
const fs = require('fs');
const server = http.createServer((req,res)=>{
    //res.writeHead(200,{"Contect-Type":"application/json"})
    //console.log(req);
    if(req.method==="GET" && req.url =="/index.html"){
        return index(req,res);
    }
    if(req.method==="GET" && req.url =="/nosotros.html"){
        return nosotros(req,res);
    }
    res.write('{mensaje:"Hola me llamastes?"}');
    res.end();
});

//500 algo fatal
//404 no se encotro
//200 exitoso
function index(req,res){
    const stat = fs.statSync('./index.html')
    res.writeHead(200,{
        "Content-Type":"text/html",
        "Content-Lenght":stat.size
    })
    const readStream = fs.createReadStream('./index.html');
    readStream.pipe(res)
    //res.write("index");
    //res.end();
}

function nosotros(req,res){
    const stat = fs.statSync('./nosotros.html')
    res.writeHead(200,{
        "Content-Type":"text/html",
        "Content-Lenght":stat.size
    })
    const readStream = fs.createReadStream('./nosotros.html');
    readStream.pipe(res)
    //res.write("nosotros");
    //res.end();
}

server.listen(8080);

