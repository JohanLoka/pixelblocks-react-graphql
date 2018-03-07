import React, {Component} from 'react';

import PlayerList from './PlayerList';
import Leaderboard from '../leaderboard/Leaderboard';

class StartPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };

    this.playClicked = this.playClicked.bind(this);
  }

  playClicked() {
    this.setState({playing: true});
  }

  renderGame() {

    if (!this.state.playing)
      return (
        <div>
          <div className="card-content white-text">
            <div className=" z-depth-5 waves-effect btn-large waves-light btn red" href="#game" onClick={this.playClicked}>
              <i className="material-icons left">gamepad</i>Play Pixelblocks</div>
          </div>
        </div>
      );

    return (
      <div className="">
        <iframe id="game" className="z-depth-5 gameWindow" src="http://bloodyblocks.se/Files/Dev/Web/PixelBlock/index.html" scrolling="no"></iframe>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="bg">
          <div className="container">
            <div className="caption">
              <span className="border">Bloody Pixels</span><br/><br/>
              <br/>
              <span className="border display-5">2D Bullet Hell</span>
            </div>

          </div>
        </div>
        <div className="row spacing-t center-align">
          <div className="col m12 center-align">
            {this.renderGame()}
          </div>
        </div>
        <div className="row spacing-t center-align">

          <div className="col m6 center-align">
            <h5>Top 5 Alltime</h5>
            <Leaderboard key="alltime" path="/rounds/toplist"/>
          </div>

          <div className="col m6 center-align">
            <h5>Top 5 Today</h5>
            <Leaderboard key="today" path="/rounds/toplist/today" />
          </div>

        </div>

      </div>
    )
  }

}

export default StartPage;
