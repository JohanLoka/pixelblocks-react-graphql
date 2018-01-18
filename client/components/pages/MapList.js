import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

//Components
import query from '../../querys/fetchMaps';
import MapItem from '../MapItem';

class MapList extends Component {

  renderMaps() {
    return this.props.data.maps.map(wave => {
      return (<MapItem data={wave} key={wave.id}/>);
    });
  }

  renderSide() {

    return (<div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <h5>Leaderboard</h5>
      </div>
    </div>)
  }

  render() {
    if (this.props.data.loading) {
      return (
        <h4 className="black-text">Loading maps... <i className="material-icons">apps</i></h4>
      );
    }

    return (
      <div className="row">
      <div className="col m6 jumbotron white-text">
          {this.renderMaps()}
      </div>
      <div className="col m6 jumbotron white-text">
          {this.renderSide()}
      </div>
      </div>
    )
  }
}

export default graphql(query)(MapList);
