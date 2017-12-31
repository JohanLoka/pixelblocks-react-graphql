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

    this.setState({playing: true});
  }

  renderGame() {
    var gameWindow = {
      border: 'none',
      width: '1080px',
      height: '720px',
      overflow: 'hidden'
    };
    var normal = {
      border: 'none',
      width: '100%',
      width: '1080px',
      height: '450px',
      overflow: 'hidden'
    };
    const jumbotronStyle = {
      paddingTop: '25px',
      paddingBottom: '100px',
      boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
    };
    const padding = {
      marginTop: '20px',
      padding: '25px'
    };
    if (!this.state.playing)
      return (<div className="center-align halign-wrapper">
        <div className="center-align halign-wrapper" style={jumbotronStyle}>
          <div className="container z-depth-5" style={padding}>
            <h1 className="red-text">Bloodyblocks</h1>
            <h4 className="red-text">A 2D action shooter</h4>
          </div>
        </div>
        <div className="center-align halign-wrapper" style={normal}>
          <div className="card-content white-text">
            <div className=" z-depth-5 waves-effect btn-large waves-light btn red" onClick={this.playClicked}>
              <i className="material-icons left">gamepad</i>Play Pixelblocks</div>
          </div>
        </div>

      </div>);

    return (<div className="card-panel grey darken-4">
      <iframe className="z-depth-5" src="http://bloodyblocks.se/Files/Dev/Web/PixelBlock/index.html" scrolling="no" style={gameWindow}></iframe>
    </div>);
  }

  render() {
    return (<div>
      <div className="col s12 m12 center-align halign-wrapper valign-wrapper">
        {this.renderGame()}
      </div>
    </div>)
  }

}

export default StartPage;
