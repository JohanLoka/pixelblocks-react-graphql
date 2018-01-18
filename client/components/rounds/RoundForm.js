import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
//Componenets
import query from '../../querys/fetchRounds';
import mutation from '../../mutations/addRound';

class RoundForm extends Component {

  constructor(props) {
    super(props);
  }

  onClickedSubmit(e) {
    e.preventDefault();

    var player_id = this.refs.player_id.value;
    var score = this.refs.score.value;
    var level = this.refs.level.value;

    this.props.mutate({
      variables: {
        id: player_id,
        score: score,
        level: level
      },
      refetchQueries: [
        {
          query: query
        }
      ]
    });
    this.refs.level.value = '';
    this.refs.score.value = '';
    this.refs.player_id.value = '';
  }

  render() {

    return (
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <h5>Create new round</h5>
          <form onSubmit={this.onClickedSubmit.bind(this)}>
            <div className="row">
              <div className="input-field col m4">
                <input placeholder="level" name="level" id="level" type="text" className="white-text validate" ref="level"/>
              </div>
              <div className="input-field col m4">
                <input placeholder="score" name="score" id="score" type="number" className="white-text validate" ref="score"/>
              </div>
              <div className="input-field col m4">
                <input placeholder="player_id" name="player_id" id="player_id" type="number" className="white-text validate" ref="player_id"/>
              </div>
            </div>

            <div className="row">
              <div className="col m6">
                <button className="btn waves-effect waves-light pink">Create New Round
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    )
  }
}

export default graphql(mutation)(RoundForm);
