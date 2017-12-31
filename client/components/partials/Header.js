import React, {Component} from 'react';

class Header extends Component {

  render() {

    var style = {
      height: '300px',
      padding:'20px'
    };

    return (<div className="blue-grey darken-1" style={style}>
      <div className="container">
      <p className="card-title">Header Content</p>
      <span className="card-title">Pixel Blocks</span>
      </div>
    </div>)
  }

}

export default Header;
