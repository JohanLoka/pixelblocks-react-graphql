import React, {Component} from 'react';

class LeaderboardItem extends Component {
  render() {
    return (
          <tr><td>{this.props.data.username}</td><td>{this.props.data.score}</td><td>{this.props.data.date}</td></tr>)
  }
}

export default LeaderboardItem;
