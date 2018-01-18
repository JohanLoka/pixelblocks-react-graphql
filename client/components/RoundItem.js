import React, {Component} from 'react';
import {Link} from 'react-router';

class RoundItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.editClicked = this.editClicked.bind(this);
  }
  editClicked(e) {
    e.preventDefault();

    this.setState({editing: true});

  }
  cancelClicked(e) {
    e.preventDefault();

    this.setState({editing: false});
  }
  onClickedSubmit(e) {
    e.preventDefault();
    console.log('submit Clicked');

    this.setState({editing: false});
  }

  renderForm()
  {
    return (
      <div className="row grow">
        <div className="col m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">

              <form onSubmit={this.onClickedSubmit.bind(this)}>
                <div className="row">
                  <div className="input-field col m6">
                    Level
                    <input value={this.props.data.level} name="enemy_count" id="enemy_count" type="text" className="validate white-text" disabled/>
                  </div>
                  <div className="input-field col m6">
                    Score
                    <input value={this.props.data.score} name="enemy_count" id="enemy_count" type="text" className="validate"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col m6">
                    <div className="btn waves-effect waves-light pink" onClick={this.cancelClicked.bind(this)}>Cancel
                      <i className="material-icons right">delete</i>
                    </div>
                  </div>
                  <div className="col m6">
                    <button className="btn waves-effect waves-light green">Submit
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
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.props.data.level}</span>
              <p>Player: {this.props.data.player_id} - Score: {this.props.data.score}</p>

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

export default RoundItem;
