import gql from 'graphql-tag';

export default gql `
mutation EditMapSettings($id: Int!, $enemy_force: String!){
  editMapSettings(id: $id, enemy_force: $enemy_force){
    enemy_force
  }
}
`;
