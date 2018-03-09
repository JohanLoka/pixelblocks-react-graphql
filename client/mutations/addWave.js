import gql from 'graphql-tag';

export default gql `
mutation AddWave($map_name: String!){
  addWave(map_name: $map_name){
    map_name
  }
}
`;
