import mongoose from 'mongoose';

export default {
  mergeMongooseSchemas(root, schemas) {
    return new mongoose.Schema({
      ...root,
      ...schemas,
    });
  },
};
