import gql from 'graphql-tag';

export default gql `
{
  waves {
    id
    map_name
    score_to_advance
    enemy_count
    medium_count
    miniboss_count
    boss_count
    increase_difficulty
  }
}
`;
