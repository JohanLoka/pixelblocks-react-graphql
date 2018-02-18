import React, {Component} from 'react';
import LeaderboardItem from './LeaderboardItem';
const axios = require('axios');

class Leaderboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    if (this.props.path === "/rounds/toplist/today")
      setInterval(this.getList.bind(this), 30000);
    else
      this.getList();
    }

  getList() {
    axios.get('https://aqueous-eyrie-89013.herokuapp.com' + this.props.path).then(resp => this.setState({items: resp.data}));
  }

  renderItems() {
    if (this.state.items.length < 1)
      return (<p className="red-text">No Games Played</p>);
    let items = this.state.items.slice(0, 5).map(item => {
      return (<LeaderboardItem data={item}/>);
    });
    return items;
  }
  render() {
    return (<table className="striped responsive-table centered">
      <tbody>
        {this.renderItems()}
      </tbody>
    </table>)
  }
}

export default Leaderboard;
