import gql from 'graphql-tag';

export default gql `
mutation AddRound($id: Int!, $score: Int!, $level: String!){
  addRound(id: $id, score: $score, level: $level, ranked:"False"){
    score
  }
}
`;
