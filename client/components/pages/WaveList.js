import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

//Components
import query from '../../querys/fetchWaves';
import WaveItem from '../WaveItem';

class WaveList extends Component {

  renderMaps() {
    return this.props.data.waves.map(wave => {
      return (<WaveItem data={wave} key={wave.id}/>);
    });
  }

  render() {
    if (this.props.data.loading) {
      return (
        <h4 className="black-text">Loading maps...</h4>
      );
    }

    return (
      <div className="row">
        <table className="responsive-table bordered centered">
          <thead>
            <tr>
              <th>Map Name</th>
              <th>Score to Advance</th>
              <th>Normal</th>
              <th>Medium</th>
              <th>Miniboss</th>
              <th>Boss</th>
              <th>Escalate</th>

            </tr>
          </thead>

          <tbody>

            {this.renderMaps()}
          </tbody>
        </table>
        <div className="col m8 jumbotron white-text"></div>
      </div>
    )
  }
}

export default graphql(query)(WaveList);
