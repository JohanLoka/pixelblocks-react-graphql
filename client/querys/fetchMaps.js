import gql from 'graphql-tag';

export default gql `
{
  map_waves {
    id
    map_name
    enemy_count
  }
}
`;
