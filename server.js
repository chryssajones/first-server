var http = require("http");
var port1 = 7000;
var port2 = 7500;
var positive = require("./positive.js");
var negative = require("./negative.js");
var r = Math.floor((Math.random() * 6));


function handleRequest1(request, response) {
	response.end(positive[r].data);
}

function handleRequest2(request, response) {
	response.end(negative[r].data);
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(port1, function() {
	console.log("Server #1 listening on: http://localhost:" + port1);
});

server2.listen(port2, function(){
	console.log("Server #2 listening on: http://localhost:" + port2);
});

