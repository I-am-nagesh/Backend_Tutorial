
const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url == '/hello'){
        res.end('Hello World !')
    }else{
        res.end("You are trying to hit a wrong url")
    }
})

server.listen(8000, () => {
    console.log("server is started")
})

// run this code....open in browser localhost:8000...also use /hello