const graphql = require('graphql');
const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt
} = graphql;

const PlayerType = require('./player_type');
const RoundType = require('./round_type');
const MapSettingsType = require('./map_settings_type');
const MapWavesType = require('./map_waves_type');

const url = 'https://aqueous-eyrie-89013.herokuapp.com/';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    player: {
      type: PlayerType,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve(parentValue, args) {
        return axios.get(`https://aqueous-eyrie-89013.herokuapp.com/players/${args.id}`).then(resp => resp.data[0]);
      }
    },
    waves: {
      type: new GraphQLList(MapWavesType),
      resolve(parentValue, args) {
        return axios.get(`https://aqueous-eyrie-89013.herokuapp.com/maps/waves`).then(resp => resp.data);
      }
    },
    maps: {
      type: new GraphQLList(MapSettingsType),
      resolve(parentValue, args) {
        return axios.get(`https://aqueous-eyrie-89013.herokuapp.com/maps/`).then(resp => resp.data);
      }
    },
    players: {
      type: new GraphQLList(PlayerType),
      resolve(parentValue, args) {
        return axios.get(`https://aqueous-eyrie-89013.herokuapp.com/players/`).then(resp => resp.data);
      }
    },
    rounds: {
      type: new GraphQLList(RoundType),
      resolve(parentValue, args) {
        return axios.get(`https://aqueous-eyrie-89013.herokuapp.com/rounds/`).then(resp => resp.data);
      }
    },
    round: {
      type: RoundType,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve(parentValue, args) {
        return axios.get(`https://aqueous-eyrie-89013.herokuapp.com/rounds/todays/${args.id}`).then(resp => resp.data[0]);
      }
    }
  }
});

module.exports = RootQuery;
