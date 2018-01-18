import React, {Component} from 'react';

//http://bloodyblocks.se/Files/Dev/Web/PixelBlock/index.html

class StartPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };

    this.playClicked = this.playClicked.bind(this);
  }

  playClicked() {

    //this.setState({playing: true});
  }

  renderGame() {

    if (!this.state.playing)
      return (
        <div>
          <div className="jumbotron">
            <h1>Bloodyblocks</h1>
            <h5>A 2D action shooter</h5>
          </div>

          <div className="card-content white-text">
            <div className=" z-depth-5 waves-effect btn-large waves-light btn pink" onClick={this.playClicked}>
              <i className="material-icons left">gamepad</i>Play Pixelblocks</div>
          </div>
        </div>
      );

    return (
      <div className="card-panel grey darken-4">
        <iframe className="z-depth-5 gameWindow" src="http://bloodyblocks.se/Files/Dev/Web/PixelBlock/index.html" scrolling="no"></iframe>
      </div>
    );
  }

  render() {
    return (
      <div className="col m12">
        {this.renderGame()}
      </div>
    )
  }

}

export default StartPage;
