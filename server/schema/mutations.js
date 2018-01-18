const graphql = require('graphql');
const axios = require('axios');

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInt} = graphql;
const PlayerType = require('./player_type');
const RoundType = require('./round_type');
const MapWaveType = require('./map_wave_type');

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
    editWave: {
      type: MapWaveType,
      args: {
        id:  {type:
          new GraphQLNonNull(GraphQLInt)
        },
        enemy_count: {
          type: GraphQLInt
        }
      },
      resolve(parentValue, args) {
        return axios.patch(`https://aqueous-eyrie-89013.herokuapp.com/maps/waves/${args.id}`, args).then(resp => res.data);
      }
    }
  }
});

module.exports = mutation;
