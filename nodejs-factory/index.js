// Example on how to create your own server: http or https 

const URL = require('url').URL;
const http = require('http');
const https = require('https');

function ServerFactory() {
	let server;
	this.createServer = function(protocol) {
		if (protocol === 'http:') {
			server = new HttpServer();
		} else {
			server = new HttpsServer();
		}
		server.protocol = protocol;

		return server;
	}
}

var HttpServer = function () {
	return http.createServer(listener);
}

var HttpsServer = function () {
	let options = {};
	// certificates can be read from local files
	// options.key = readFile(pathToFileWithKey);
	// options.certificate = readFile(pathToFileWithCertificate)';

	return https.createServer(options, listener);
}

function listener(req, res) {
	// log incoming requests
	console.log(new Date().toISOString(), req.url, req.headers);
}

let url = new URL(process.argv[2]);
let server = (new ServerFactory).createServer(url.protocol);

// Set your server to listen on port 8082
server.listen('8082');