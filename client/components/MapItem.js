import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';

import mutation from '../mutations/updateMapSettings';
import query from '../querys/fetchMaps';

class MapItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      force: this.props.data.enemy_force
    };

    this.editClicked = this.editClicked.bind(this);
  }

  onClickedSubmit(e) {
    e.preventDefault();

    var enemy_force = this.refs.enemy_force.value;
    var id = this.refs.id.value;

    this.props.mutate({
      variables: {
        id: id,
        enemy_force: enemy_force
      },
      refetchQueries: [
        {
          query: query
        }
      ]
    });

    this.setState({editing: false});
  }
  editClicked() {

    this.setState({editing: true});

  }
  cancelClicked() {

    this.setState({editing: false});

  }
  onForceChanged() {
    this.setState({force: this.refs.enemy_force.value});
  }

  renderForm() {
    return (
      <div className="row grow">
        <div className="col m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">

              <form onSubmit={this.onClickedSubmit.bind(this)}>
                <div className="row">
                  <div className="input-field col m3">
                    map_name
                    <input value={this.props.data.map_name} name="map_name" id="map_name" type="text" className="white-text validate"/>
                  </div>
                  <div className="input-field col m3">
                    enemy_force
                    <input name="enemy_count" id="enemy_count" type="text" className="validate" value={this.state.force} onChange={this.onForceChanged.bind(this)} ref="enemy_force"/>
                  </div>
                  <div className="input-field col m3">
                    reward_badges
                    <input placeholder={this.props.data.reward_badges} name="enemy_count" id="enemy_count" type="text" className="validate"/>
                  </div>
                  <div className="input-field col m3">
                    id
                    <input value={this.props.data.id} ref="id" name="enemy_count" id="enemy_count" type="text" className="white-text validate" disabled="disabled"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col m3">
                    <button className="btn waves-effect waves-light pink" onClick={this.cancelClicked.bind(this)}>Cancel
                      <i className="material-icons right">delete</i>
                    </button>
                  </div>
                  <div className="col m3">
                    <button className="btn waves-effect waves-light green">Update
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    )
  }

  renderNormal() {
    return (
      <div className="row grow" onClick={this.editClicked}>
        <div className="col m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.props.data.map_name}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  render() {
    if (this.state.editing)
      return (this.renderForm())

    return (this.renderNormal())
  }

}

export default graphql(mutation)(MapItem);
