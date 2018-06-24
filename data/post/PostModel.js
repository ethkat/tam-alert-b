import mongoose from 'mongoose';
import Utils from '../utils';
import generateRandomId from '../helpers/models/id';

const PostSchema = Utils.mergeMongooseSchemas({
  _id: {
    type: String,
  },
  type: {
    type: String,
    enum: ['success', 'info', 'warning', 'danger'],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  trustCount: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    required: false,
  },
});

PostSchema.pre('save', function cb(next) {
  this._id = generateRandomId();
  next();
});

export default mongoose.model('Post', PostSchema);
