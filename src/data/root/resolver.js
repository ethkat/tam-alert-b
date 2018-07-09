import merge from 'lodash/merge';
import PostsResolvers from '../post/resolver';

export default merge({
  Query: {},
}, PostsResolvers);
