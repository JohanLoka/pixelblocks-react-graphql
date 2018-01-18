import gql from 'graphql-tag';

export default gql `
{
  rounds {
    id
    level
    score
    player_id
    date
  }
}
`;
