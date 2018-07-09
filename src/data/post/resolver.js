import { queryPosts, insertPost, updateUpTrustPoints } from './Post';

export default {
  Query: {
    async getPosts(obj, args) {
      const posts = await queryPosts(args);
      return posts;
    },
  },
  Mutation: {
    async insertPost(root, { post }) {
      const insert = await insertPost(post);
      return insert ? 'done' : 'error';
    },
    async updatePostTrust(root, { data }) {
      const insert = await updateUpTrustPoints(data);
      return insert ? 'done' : 'error';
    },
  },
};
