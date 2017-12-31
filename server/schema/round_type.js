const graphql = require('graphql');
const axios = require('axios');

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInt, GraphQLList} = graphql;
const PlayerType = require('./player_type');

const RoundType = new GraphQLObjectType({
  name: 'Round',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    score: {
      type: GraphQLInt
    },
    level: {
      type: GraphQLString
    },
    ranked: {
      type: GraphQLString
    }
  })
});
//
module.exports = RoundType;
