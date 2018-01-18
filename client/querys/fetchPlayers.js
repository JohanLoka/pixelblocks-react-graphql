import gql from 'graphql-tag';

export default gql `
{
  players {
    id
    username
    highscore
    levels_completed
    updated
  }
}
`;
