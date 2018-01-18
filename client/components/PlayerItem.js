import React, {Component} from 'react';
import {Link} from 'react-router';

class PlayerItem extends Component {

  render() {
    return (<tr>
      <td>{this.props.data.username}</td>
      <td>{this.props.data.highscore}</td>
      <td>{this.props.data.levels_completed}</td>
    </tr>)
  }

}

export default PlayerItem;
