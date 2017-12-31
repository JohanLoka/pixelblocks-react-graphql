import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
//Components
import PlayerItem from '../PlayerItem';

class PlayerList extends Component {

  renderPlayers() {
    return this.props.data.players.map(player => {
      return (<PlayerItem data={player} key={player.id}/>);
    });
  }

  render() {
    if (this.props.data.loading) {
      return (<div>Loading...</div>);
    }

    var style = {
      padding: '20px'
    }
    const jumbotronStyle = {
      paddingTop: '25px',
      paddingBottom: '100px',
      boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
    };
    const padding = {
      marginTop: '20px',
      padding: '25px'
    };
    return (<div className="center-align halign-wrapper">
    <div className="center-align halign-wrapper" style={jumbotronStyle}>
      <div className="container z-depth-5" style={padding}>
        <h1 className="red-text">Leaderboard</h1>
        <h4 className="red-text">Ranked Games</h4>
      </div>
    </div>
      <div style={style} className="center-align halign-wrapper white col s8 align-center">
        <table className="center-align halign-wrapper bordered highlight responsive-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Highscore</th>
              <th>Levels Completed</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {this.renderPlayers()}
          </tbody>
        </table>
      </div>
    </div>)
  }
}

const query = gql `
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

export default graphql(query)(PlayerList);
