Lab 01: Node.js and Express Server

Student Name: TEJAS R
Section: CSE(QE) - 2B - 204
Subject: Backend Development Fundamentals

1. Objective

To set up a Node.js project and build a basic web server using the built-in HTTP module and Express.js.

2. Technologies Used

Node.js

Express.js 5.3.0

JavaScript

Visual Studio Code

3. Project Structure

lab-01/
├── screenshots/
│   ├── home.png
│   ├── about.png
│   ├── time.png
│   ├── 404.png
│   └── terminal.png
├── app.js
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore

4. Installation and Execution

Prerequisites

Node.js

npm

Install dependencies

npm install

Run the Node.js HTTP server

node server.js

Run the Express server

node app.js

Server address: http://localhost:3000

5. API Endpoints

Method

Endpoint

Description

Status

GET

/

Welcome message

200

GET

/about

Student details in JSON

200

GET

/time

Current date and time

200

GET

/unknown

Page not found

404

6. Screenshots

Home Route



About Route



Time Route



404 Route



Server Running



7. Problems Faced and Solutions

Learned to initialize a Node.js project using npm.

Understood the installation and management of Express.js dependencies.

Created an HTTP server using Node.js.

Implemented GET routes using Express.js.

Learned HTTP status codes and 404 error handling.

8. Conclusion

Successfully developed a basic HTTP server using Node.js and an Express server with multiple GET routes. This lab helped me understand backend server development, request-response handling, routing, and HTTP status codes.

9. Live Deployment

Pending deployment.