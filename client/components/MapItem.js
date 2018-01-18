import React, {Component} from 'react';
import {Link} from 'react-router';

class MapItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.editClicked = this.editClicked.bind(this);
  }
  editClicked() {

    this.setState({editing: true});

  }
  cancelClicked() {

    this.setState({editing: false});

  }
  submitClicked() {

    console.log('submit Clicked');
  }

  renderForm()
  {
    return (
      <div className="row grow">
        <div className="col m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">

              <form>
                <div className="row">
                  <div className="input-field col m3">
                    Map Name
                    <input value={this.props.data.map_name} name="map_name" id="map_name" type="text" className="white-text validate" disabled/>
                  </div>
                  <div className="input-field col m3">
                    Score to Advance
                    <input value={this.props.data.enemy_count} name="enemy_count" id="enemy_count" type="text" className="validate"/>
                  </div>
                  <div className="input-field col m3">
                    Enemy Count
                    <input value={this.props.data.enemy_count} name="enemy_count" id="enemy_count" type="text" className="validate"/>
                  </div>
                  <div className="input-field col m3">
                    Medium Count
                    <input value={this.props.data.enemy_count} name="enemy_count" id="enemy_count" type="text" className="validate"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col m3">
                    <button className="btn waves-effect waves-light pink" onClick={this.cancelClicked.bind(this)}>Cancel
                      <i className="material-icons right">delete</i>
                    </button>
                  </div>
                  <div className="col m3">
                    <button className="btn waves-effect waves-light" onClick={this.submitClicked.bind(this)}>Submit
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
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.props.data.map_name}</span>
              <p>Enemys: {this.props.data.enemy_count}</p>

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

export default MapItem;
