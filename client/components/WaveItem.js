import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';

import mutation from '../mutations/updateMapWaves';
import query from '../querys/fetchWaves';

class WaveItem extends Component {

  constructor(props) {
    super(props);
    const {
      enemy_count,
      score_to_advance,
      medium_count,
      miniboss_count,
      boss_count,
      increase_difficulty
    } = this.props.data;

    this.state = {
      enemy_count,
      score_to_advance,
      medium_count,
      miniboss_count,
      boss_count,
      increase_difficulty
    };

  }

  onClickedSubmit(e) {
    e.preventDefault();

    const id = this.props.data.id;
    const {
      enemy_count,
      score_to_advance,
      medium_count,
      miniboss_count,
      boss_count,
      increase_difficulty
    } = this.state;

    this.props.mutate({
      variables: {
        id: id,
        score_to_advance: score_to_advance,
        enemy_count: enemy_count,
        medium_count: medium_count,
        miniboss_count: miniboss_count,
        boss_count: boss_count
      }
    });
  }

  onCountChanged() {
    const id = this.props.data.id;
    const {
      enemy_count,
      score_to_advance,
      medium_count,
      miniboss_count,
      boss_count,
      increase_difficulty
    } = this.refs;

    this.setState({
      enemy_count: enemy_count.value,
      score_to_advance: score_to_advance.value,
      medium_count: medium_count.value,
      miniboss_count: miniboss_count.value,
      boss_count: boss_count.value,
      increase_difficulty: increase_difficulty.value
    });
  }

  render() {
    return (
      <tr>
        <td>{this.props.data.map_name}</td>
        <td>
          <div className="input-field">
            <input placeholder="Placeholder" id="first_name" type="number" className="validate" ref="score_to_advance" onChange={this.onCountChanged.bind(this)} value={this.state.score_to_advance}/>
          </div>
        </td>
        <td>
          <div className="input-field">
            <input placeholder="Placeholder" id="first_name" type="number" className="validate" ref="enemy_count" onChange={this.onCountChanged.bind(this)} value={this.state.enemy_count}/>
          </div>
        </td>
        <td>
          <div className="input-field">
            <input placeholder="Placeholder" id="first_name" type="number" className="validate" ref="medium_count" onChange={this.onCountChanged.bind(this)} value={this.state.medium_count}/>
          </div>
        </td>
        <td>
          <div className="input-field">
            <input placeholder="Placeholder" id="first_name" type="number" className="validate" ref="miniboss_count" onChange={this.onCountChanged.bind(this)} value={this.state.miniboss_count}/>
          </div>
        </td>
        <td>
          <div className="input-field">
            <input placeholder="Placeholder" id="first_name" type="number" className="validate" ref="boss_count" onChange={this.onCountChanged.bind(this)} value={this.state.boss_count}/>
          </div>
        </td>
        <td>
          <div className="input-field">
            <input placeholder="Placeholder" id="first_name" type="number" className="validate" ref="increase_difficulty" onChange={this.onCountChanged.bind(this)} value={this.state.increase_difficulty}/>
          </div>
        </td>
        <td>
          <button className="btn waves-effect waves-light pink" onClick={this.onClickedSubmit.bind(this)}>Update
            <i className="material-icons right">save</i>
          </button>
        </td>
      </tr>
    )
  }

}

export default graphql(mutation)(WaveItem);
