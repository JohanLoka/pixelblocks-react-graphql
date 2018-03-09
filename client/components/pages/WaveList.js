import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import axios from 'axios';

//Components
import query from '../../querys/fetchWaves';
import WaveItem from '../WaveItem';
import AdminNavbar from '../partials/admin_navbar';

class WaveList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      created_wave_name: ''
    }
  }

  renderMaps() {
    return this.props.data.waves.map(wave => {
      return (<WaveItem data={wave} key={wave.id}/>);
    });
  }

  onWaveChanged() {
    const created_wave_name = this.refs.created_wave_name.value;

    this.setState({created_wave_name});
  }

  createWave()
  {
    if (this.state.created_wave_name.length <= 4)
      return;

    const payload = {
      map_name: this.state.created_wave_name
    };

    axios.post('https://aqueous-eyrie-89013.herokuapp.com/maps/waves', payload).then(resp => console.log(resp.data));
  }

  renderForm() {
    return (
      <div className="row">

        <div className="col md-3">
          <div className="input-field">
            <h4 className="red-text">Create new Wave</h4>
          </div>
        </div>

        <div className="col md-6">
          <div className="input-field">
            <input placeholder="Map Name" id="created_wave_name" type="text" className="validate" ref="created_wave_name" onChange={this.onWaveChanged.bind(this)} value={this.state.created_wave_name}/>
          </div>
        </div>

        <div className="col md-3">
          <div className="input-field">
            <button className="btn-floating btn-large waves-effect waves-light pink" onClick={this.createWave.bind(this)}>
              <i className="material-icons right">add</i>
            </button>
          </div>
        </div>

      </div>
    );
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
        {this.renderForm()}
        <table className="responsive-table bordered">
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
      </div>
    )
  }
}

export default graphql(query)(WaveList);
