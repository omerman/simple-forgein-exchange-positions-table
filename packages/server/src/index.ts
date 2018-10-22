import { Application } from 'express';
import createApp from '../create-app';
import './globals.d';
import './json-module.d';
import { mainRouter } from './router';


const app: Application = createApp();
app.use('api', mainRouter);


module.exports = {
  app,
  async connect() {
    // Connect to db
  },
  async disconnect() {
    // Disconnect from db
  },
};
