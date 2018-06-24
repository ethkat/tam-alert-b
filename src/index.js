/* eslint-disable no-console */

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import db from '../data/mongo';
import schema from '../data/schema';
import { SERVER_INFO_LOG } from './constants';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Access-Control-Request-Method');
  next();
});

app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

db.connect((error) => {
  if (error) {
    console.error('There was an error starting the server', error);
  } else {
    app.listen(process.env.PORT, () => {
      console.info(SERVER_INFO_LOG);
    });
  }
});
