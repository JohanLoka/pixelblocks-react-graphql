import React, {Component} from 'react';

class Stats extends Component {

  constructor(props) {
    super(props);

    this.state = {
      total: -1,
      best: -1,
      average: -1
    };
  }

  componentDidMount()
  {
    this.calculate();
  }

  calculate() {
    var total = 0;
    var best = 0;
    var average = 0;
    this.props.rounds.map(item => {
      total += item.score;
      best = item.score > best
        ? item.score
        : best;
      average += item.score;
    });

    average = average / this.props.rounds.length;

    this.setState({total: total, best: best, average: average});
  }
  render()
  {
    return (
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
        <h5>Stats component</h5>

          <p>Total rounds: {this.props.rounds.length}</p>
          <p>Total score: {this.state.total}</p>
          <p>Best score: {this.state.best}</p>
          <p>Avg score: {this.state.average}</p>
        </div>
      </div>
    )
  }

}

export default Stats;
