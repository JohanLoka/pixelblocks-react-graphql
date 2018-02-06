import React, {Component} from 'react';
import LeaderboardItem from './LeaderboardItem';
const axios = require('axios');

class Leaderboard extends Component {

  constructor(props){
    super(props);

    this.state = {items: []};
    this.getList();
  }

 getList(){
  axios.get('https://aqueous-eyrie-89013.herokuapp.com' + this.props.path).then(resp => this.setState({items: resp.data}));
}

  renderItems() {
    if(this.state.items.length < 1) return;
    let items = this.state.items.slice(0,5).map(item => {
      return (<LeaderboardItem data={item} />);
    });
    return items;
  }
  render() {
    return (
        <table className="striped">
        <tbody>
        {this.renderItems()}
        </tbody>
        </table>)
  }
}

export default Leaderboard;
