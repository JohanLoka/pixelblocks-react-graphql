const graphql = require('graphql');
const axios = require('axios');

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInt} = graphql;
const PlayerType = require('./player_type');
const RoundType = require('./round_type');
const MapSettingsType = require('./map_settings_type');
const MapWavesType = require('./map_waves_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addRound: {
      type: RoundType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        },
        score: {
          type: new GraphQLNonNull(GraphQLInt)
        },
        level: {
          type: new GraphQLNonNull(GraphQLString)
        },
        ranked: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parentValue, args) {
        return axios.post(`https://aqueous-eyrie-89013.herokuapp.com/rounds`, args).then(resp => resp.data[0]);
      }
    },
    editMapSettings: {
      type: MapSettingsType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        },
        enemy_force: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        return axios.patch(`https://aqueous-eyrie-89013.herokuapp.com/maps/settings/${args.id}`, args).then(resp => resp.data);
      }
    },
    editMapWaves: {
      type: MapWavesType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        },
        score_to_advance: {
          type: GraphQLString
        },
        enemy_count: {
          type: GraphQLString
        },
        medium_count: {
          type: GraphQLString
        },
        miniboss_count: {
          type: GraphQLString
        },
        boss_count: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        return axios.patch(`https://aqueous-eyrie-89013.herokuapp.com/maps/waves/${args.id}`, args).then(resp => resp.data);
      }
    }
  }
});

module.exports = mutation;
