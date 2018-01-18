const graphql = require('graphql');
const axios = require('axios');

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInt, GraphQLList} = graphql;
const RoundType = require('./round_type');

const PlayerType = new GraphQLObjectType({
  name: 'Player',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    username: {
      type: GraphQLString
    },
    highscore: {
      type: GraphQLInt
    },
    levels_completed: {
      type: GraphQLInt
    },
    updated: {
      type: GraphQLString
    },
    rounds: {
      type: new GraphQLList(RoundType),
      resolve(parentValue, args) {
        return axios.get(`https://aqueous-eyrie-89013.herokuapp.com/rounds/${parentValue.id}`).then(resp => resp.data);
      }
    }
  })
});

module.exports = PlayerType;
