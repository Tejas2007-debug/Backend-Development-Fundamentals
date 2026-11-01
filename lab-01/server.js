const http = require("http");

// Create HTTP server
const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Hello! My Node.js HTTP Server is running successfully.");

});

// Start server on port 3000
server.listen(3000, () => {
    console.log("HTTP server running at http://localhost:3000");
});