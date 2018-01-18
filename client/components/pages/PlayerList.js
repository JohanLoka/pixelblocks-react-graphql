import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
//Components
import PlayerItem from '../PlayerItem';
import query from '../../querys/fetchPlayers';

class PlayerList extends Component {

  renderPlayers() {
    return this.props.data.players.map(player => {
      return (<PlayerItem data={player} key={player.id}/>);
    });
  }

  renderSide() {

    return (<div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <h5>Leaderboard</h5>
      </div>
    </div>)
  }

  renderSide_lower() {

    return (<div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <h5>Stats</h5>
      </div>
    </div>)
  }

  render() {
    if (this.props.data.loading) {
      return (<h4 className="black-text">Loading players...</h4>);
    }

    return (<div className="row">
      <div className="col m6 jumbotron">

        <table className="highlight">
        <thead>
        <th>Name</th>
        <th>Score</th>
        <th>Levels</th>
        </thead>
          <tbody>
            {this.renderPlayers()}
          </tbody>
        </table>

      </div>
      <div className="col m6 jumbotron white-text">
        {this.renderSide()}
        {this.renderSide_lower()}

      </div>
    </div>)
  }
}

export default graphql(query)(PlayerList);
