const graphql = require('graphql');
const axios = require('axios');

const {GraphQLObjectType,GraphQLList, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInt} = graphql;
const PlayerType = require('./player_type');
const RoundType = require('./round_type');

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
        return axios.get(`https://obscure-brushlands-30729.herokuapp.com/players/${args.id}`).then(resp => resp.data[0]);
      }
    },
    players: {
      type: new GraphQLList(PlayerType),
      resolve(parentValue, args) {
        return axios.get(`https://obscure-brushlands-30729.herokuapp.com/players/`).then(resp => resp.data);
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
        return axios.get(`https://obscure-brushlands-30729.herokuapp.com/rounds/todays/${args.id}`).then(resp => resp.data[0]);
      }
    }
  }
});

module.exports = RootQuery;
