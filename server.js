// Let's require/import the HTTP module
// For debug (Franz advice)
// First way: put debugger keyword in the code and launch node debug server.js
// Second (more comfortable) way: use node-inspector and just node --debug-brk server.js
var http = require('http');
const url = require('url');

// Port d'écoute du serveur HTTP
var port = process.env.PORT || 8080;

// Callback appellée à chaque réception de requête HTTP
function handleRequest(request, response)
{
    if (request.url == '/')
    {
    	response.write('Vous êtes au début');
      response.write('PORT = ');
      response.write(String(request.url.port));
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

// Callback appellée à chaque réception de requête HTTP
function handleListenReady(port)
{
  console.log("------------------");
  console.log("| Serveur lancé  |");
  console.log("------------------");
  console.log("Serveur en écoute sur: http://localhost:%s", port);
}

// Création du serveur
var server = http.createServer(handleRequest);

server.listen(port, handleListenReady(port) );

// Démarrage du serveur
/*
server.listen(PORT, function(){
    // Callback triggered when server is successfully listening. Hurray!
    console.log("------------------");
    console.log("| Serveur lancé  |");
    console.log("------------------");
    console.log("\n");
    console.log("Serveur en écoute sur: http://localhost:%s\n", PORT);
});
*/
