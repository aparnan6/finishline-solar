const express = require('express')
const app = express()


var http = require('http');
var fs = require("fs");
 
http.createServer(function(request, response) {
	if(request.url === "/"){
		sendFileContent(response, "index.html", "text/html");
	}
}).listen(3000);

function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}