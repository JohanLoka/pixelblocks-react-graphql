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

  renderTable() {

    const date = this.props.data.date.substring(0, 10);

    return (<tr onClick={this.editClicked}>
      <td>{this.props.data.level}</td>
      <td>{this.props.data.player_id}</td>
      <td>{this.props.data.score}</td>
      <td>{date}</td>
    </tr>)
  }

  renderForm() {
    return (<div className="col m12">
      <form onSubmit={this.onClickedSubmit.bind(this)}>
        <div className="row">
          <div className="input-field col m4">
            <input value={this.props.data.level} name="enemy_count" id="enemy_count" type="text" className="validate" disabled="disabled"/>
          </div>
          <div className="input-field col m4">
            <input value={this.props.data.player_id} name="enemy_count" id="enemy_count" type="text" className="validate"/>
          </div>
          <div className="input-field col m4">
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
            <button className="btn waves-effect waves-light green">Update
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>)
  }

  renderNormal() {
    return (<div className="row grow" onClick={this.editClicked}>
      <div className="col s12 m12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{this.props.data.level}</span>
            <p>Player: {this.props.data.player_id}
              - Score: {this.props.data.score}</p>

          </div>
        </div>
      </div>
    </div>)
  }
  render() {
    if (this.state.editing)
      return (this.renderForm())

    return (this.renderTable())
  }

}

export default RoundItem;
