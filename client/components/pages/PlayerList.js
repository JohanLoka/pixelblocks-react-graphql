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

  render() {
    if (this.props.data.loading) {
      return (
        <h4 className="black-text">Loading players...</h4>
      );
    }

    return (
      <div className="jumbotron">
          {this.renderPlayers()}
      </div>
    )
  }
}



export default graphql(query)(PlayerList);
