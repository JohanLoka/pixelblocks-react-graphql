import React, {Component} from 'react';

class PlayerList extends Component {

  render() {
    return (<tr>
      <td>{this.props.data.username}</td>
      <td>{this.props.data.highscore}</td>
      <td>{this.props.data.levels_completed}</td>
      <td>{this.props.data.updated}</td>
    </tr>)
  }

}

export default PlayerList;
