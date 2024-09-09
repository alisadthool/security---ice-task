console.log("this lecuter is kinda cool");
import http from "http"
const PORT = 3000

const server=http.createServer((req, res)=>{
    res.end('we are making his work ')
})
server.listen(PORT)