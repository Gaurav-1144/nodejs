const http = require('http');

/* One way to declare the server */
http.createServer((req,response)=>{
 response.write("Server is working");
 response.end();
}).listen(8001);

/* Second way to declare the server */
function serverActive(req,res) {
    res.write("server still active");
    res.end();
}
http.createServer(serverActive).listen(8002);

/*Third way to declare the server */
const datacontrol = (req,res)=> {
    res.write("server now active");
    res.end();
}
http.createServer(datacontrol).listen(8003);