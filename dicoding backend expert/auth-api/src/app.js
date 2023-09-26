const container = require('./Infrastuctures/container');
const createServer = require('./Infrastuctures/http/createServer');

require('dotenv').config();

const start = async () => {
  const server = await createServer(container);
  await server.start();
  console.log(`server start at ${server.info.uri}`);
};

start();
