import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

//Components
import query from '../../querys/fetchMaps';
import MapItem from '../MapItem';

class MapList extends Component {

  renderMaps() {
    return this.props.data.map_waves.map(wave => {
      return (<MapItem data={wave} key={wave.id}/>);
    });
  }

  render() {
    if (this.props.data.loading) {
      return (
        <h4 className="black-text">Loading maps... <i className="material-icons">apps</i></h4>
      );
    }

    return (
      <div className="jumbotron white-text">
          {this.renderMaps()}
      </div>
    )
  }
}

export default graphql(query)(MapList);
