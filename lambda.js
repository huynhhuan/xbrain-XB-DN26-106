const serverless = require('serverless-http');
const app = require('./app');

// This is the entry point for AWS Lambda
module.exports.handler = serverless(app);
