import bson from 'bson';

const { ObjectID } = bson;

export default () => new ObjectID().toString();
