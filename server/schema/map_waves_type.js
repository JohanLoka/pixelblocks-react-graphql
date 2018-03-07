const graphql = require('graphql');
const axios = require('axios');

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInt, GraphQLList} = graphql;

const MapWavesType = new GraphQLObjectType({
  name: 'MapWave',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    enemy_count: {
      type: GraphQLInt
    },
    medium_count: {
      type: GraphQLInt
    },
    miniboss_count: {
      type: GraphQLInt
    },
    boss_count: {
      type: GraphQLInt
    },
    increase_difficulty: {
      type: GraphQLInt
    },
    score_to_advance: {
      type: GraphQLInt
    },
    map_name: {
      type: GraphQLString
    }
  })
});
//
module.exports = MapWavesType;
