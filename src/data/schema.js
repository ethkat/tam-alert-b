/* eslint-disable no-console */

import path from 'path';
import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = importSchema(path.join(__dirname, './root/Query.graphql'));

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  logger: {
    log(error) {
      console.error(error);
    },
  },
});
