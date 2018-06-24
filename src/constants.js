export const foo = 'bar';

export const SERVER_INFO_LOG = `
\x1b[32m ****** Alert BACKEND INFO ****** \n
  \x1b[33m MONGO_URL \x1b[30m${process.env.MONGO_URL} \n
  \x1b[33m MONGO_DB_NAME \x1b[30m${process.env.MONGO_DB_NAME} \n
  \x1b[33m PORT \x1b[30m${process.env.PORT} \n
  \x1b[33m NODE_ENV \x1b[30m${process.env.ENV} \n
  \x1b[33m Server Running at \x1b[30m${process.env.HOST}:${process.env.PORT} \n
  \x1b[33m Graphql Server Running at \x1b[30m${process.env.HOST}:${process.env.PORT}/graphql \n
  \x1b[33m Graphiql Server running at \x1b[30m${process.env.HOST}:${process.env.PORT}/graphiql \n \n
`;
