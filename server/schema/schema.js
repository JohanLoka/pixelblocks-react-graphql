const _ = require('lodash');
const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./root_query_type');
const mutations = require('./mutations');

//sub folders for mutations

//sub folders for qouerys


module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations
});
