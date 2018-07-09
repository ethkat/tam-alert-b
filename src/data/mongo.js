import mongodb from 'mongodb';
import mongoose from 'mongoose';

const { MongoClient } = mongodb;

let client = null;

export default {
  getDb() {
    return client.db(process.env.MONGO_DB_NAME);
  },
  connect(cb) {
    MongoClient.connect(`${process.env.MONGO_URL}/${process.env.MONGO_DB_NAME}`, {
      useNewUrlParser: true,
    }, (error, dbClient) => {
      if (error) return cb(error);
      cb(null);
      client = dbClient;
      return mongoose.connect(`${process.env.MONGO_URL}/${process.env.MONGO_DB_NAME}`);
    });
  },
  getCollection(collection) {
    return this.getDb().collection(collection);
  },
};
