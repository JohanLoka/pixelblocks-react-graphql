import React, {Component} from 'react';

import LeaderboardNav from '../partials/Leaderboard_nav';

class StartPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };
  }

  renderGame() {

    if (!this.state.playing)
      return (
        <div>
          <div className="card-content white-text">
            <div className=" z-depth-5 waves-effect btn-large waves-light btn red" href="#game" onClick={() => this.setState({playing: true})}>
              <i className="material-icons left">gamepad</i>Play Bloody Pixels</div>
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
          <div className="caption">
            <span className="border">Bloody Pixels</span><br/><br/>
            <br/>
            <span className="border display-5">2D Bullet Hell</span>
          </div>
        </div>

        <div className="row spacing-t center-align">
          <div className="col m12 center-align">
            {this.renderGame()}
          </div>
        </div>

        <LeaderboardNav/>
      </div>
    )
  }

}

export default StartPage;
