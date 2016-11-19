// Let's require/import the HTTP module
// For debug (Franz advice)
// First way: put debugger keyword in the code and launch node debug server.js
// Second (more comfortable) way: use node-inspector and just node --debug-brk server.js
var http = require('http');

// Let's define a port we want to listen to
const PORT=8080;

// We need a function which handles requests and send response
function handleRequest(request, response){
    if (request.url == '/')
    {
    	response.write('Vous êtes au début');
    }
    else if (request.url == "/franz")
    {
    	response.write('Vous êtes chez Franz\n');
    }
    else
    {
    	response.write('Vous êtes à un endroit indéterminé');
    }
    response.end();
}

// Create a server
var server = http.createServer(handleRequest);

//Let's start our server
server.listen(PORT, function(){
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
