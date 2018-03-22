import React, {Component} from 'react';
import axios from 'axios';

//Components
import LiveItem from '../LiveItem';

class LiveData extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      timerId: 0
    }
  }

  componentDidMount() {
    this.fetchData();
    var timerId = setInterval(this.fetchData.bind(this), 10000);
    this.setState({timerId});
  }

  componentWillUnMount() {
    clearInterval(this.state.timerId);
  }

  fetchData() {
    axios.get("https://aqueous-eyrie-89013.herokuapp.com/rounds/live").then(resp => this.setState({data: resp.data}));
  }

  render() {

    if (this.state.data.length <= 0) {
      return (
        <h4 className="black-text">Loading Data...</h4>
      );
    }
    const width = 12 / this.state.data.length;
    let rows = this.state.data.map(item => {
      return (<LiveItem width={width} key={item.type} data={item}/>);
    })

    return (
      <div className="row">
        {rows}
      </div>
    )
  }
}

export default LiveData;
