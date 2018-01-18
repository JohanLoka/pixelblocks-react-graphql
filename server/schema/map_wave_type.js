const graphql = require('graphql');
const axios = require('axios');

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInt, GraphQLList} = graphql;

const MapWaveType = new GraphQLObjectType({
  name: 'MapWave',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    score_to_advance: {
      type: GraphQLString
    },
    map_name: {
      type: GraphQLString
    },
    miniboss_count: {
      type: GraphQLInt
    },
    medium_count: {
      type: GraphQLInt
    },
    enemy_count: {
      type: GraphQLInt
    }
  })
});
//
module.exports = MapWaveType;
