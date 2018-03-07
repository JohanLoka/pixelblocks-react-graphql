const graphql = require('graphql');
const axios = require('axios');

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInt, GraphQLList} = graphql;

const MapSettingsType = new GraphQLObjectType({
  name: 'MapSetting',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    enemy_force: {
      type: GraphQLString
    },
    map_name: {
      type: GraphQLString
    },
    max_crates: {
      type: GraphQLInt
    },
    reward_badges: {
      type: GraphQLInt
    },
    players_tried: {
      type: GraphQLInt
    },
    players_completed: {
      type: GraphQLInt
    }
  })
});
//
module.exports = MapSettingsType;
