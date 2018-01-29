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
        <table className="bordered">
        <tbody>
        <tr>
        <td>Games played</td>
        <td>{this.props.rounds.length}</td>
        </tr>
        <tr>
        <td>Total score</td>
        <td>{this.state.total}</td>
        </tr>
        <tr>
        <td>Best score</td>
        <td>{this.state.best}</td>
        </tr>
        <tr>
        <td>Average score</td>
        <td>{this.state.average.toFixed(2)}</td>
        </tr>
        </tbody>
        </table>
        </div>
      </div>
    )
  }

}

export default Stats;
