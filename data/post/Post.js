import db from '../mongo';
import PostModel from './PostModel';

export const Posts = () => db.getCollection('posts');

export const queryPosts = ({ limit = 15 }) => (
  new Promise((resolve, reject) => {
    Posts().find().limit(limit).toArray((error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  })
);

export const insertPost = post => (
  new Promise((resolve, reject) => {
    PostModel.create(post, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  })
);

export const updateUpTrustPoints = ({ _id, type }) => (
  new Promise((resolve, reject) => {
    PostModel.update({ _id }, {
      $inc: {
        trustCount: type === 'up' ? 1 : -1,
      },
    }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  })
);
