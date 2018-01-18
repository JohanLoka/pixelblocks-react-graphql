import gql from 'graphql-tag';

export default gql `
{
  maps {
    id
    enemy_force
    map_name
    reward_badges
    max_crates
    players_tried
    players_completed
  }
}
`;
