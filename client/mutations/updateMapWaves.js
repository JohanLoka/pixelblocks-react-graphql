import gql from 'graphql-tag';

export default gql `
mutation EditMapWaves($id: Int!, $score_to_advance: String!, $enemy_count: String!, $medium_count: String!, $miniboss_count: String!, $boss_count: String!){
  editMapWaves(id: $id, score_to_advance: $score_to_advance, enemy_count: $enemy_count, medium_count: $medium_count, miniboss_count: $miniboss_count, boss_count: $boss_count){
    enemy_count
  }
}
`;
