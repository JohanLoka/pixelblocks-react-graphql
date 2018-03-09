import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

//Components
import query from '../../querys/fetchMaps';
import MapItem from '../MapItem';
import AdminNavbar from '../partials/admin_navbar';

class MapList extends Component {

  renderMaps() {
    return this.props.data.maps.map(wave => {
      return (<MapItem data={wave} key={wave.id}/>);
    });
  }

  renderSide() {

    return (
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <h5 className="red-text">(Wave Settings TBA)</h5>
        </div>
      </div>
    )
  }

  render() {
    if (this.props.data.loading) {
      return (
        <h4 className="black-text">Loading maps...</h4>
      );
    }

    return (
      <div className="row">
      <AdminNavbar />
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
