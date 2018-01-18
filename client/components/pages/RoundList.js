import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

//Components
import RoundItem from '../RoundItem';
import RoundForm from '../rounds/RoundForm';
import Stats from '../rounds/Stats';

import query from '../../querys/fetchRounds';

class RoundList extends Component {

  constructor(props) {
    super(props);

  }

  onClickedSubmit(e) {
    e.preventDefault();

  }

  renderRounds() {
    return this.props.data.rounds.map(item => {
      return (<RoundItem data={item} key={item.id}/>);
    });
  }

  renderForm() {
    return (<RoundForm/>);
  }

  render() {
    if (this.props.data.loading) {
      return (
        <h4 className="black-text">Loading rounds...
          <i className="material-icons">apps</i>
        </h4>
      );
    }
    return (
      <div className="row">
        <div className="col m6 jumbotron white-text">
          {this.renderRounds()}
        </div>
        <div className="col m6 jumbotron white-text">
          {this.renderForm()}
          <Stats rounds={this.props.data.rounds}/>
        </div>
      </div>
    )
  }
}

export default graphql(query)(RoundList);
