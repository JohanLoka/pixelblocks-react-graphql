import React, {Component} from 'react';
import {Link} from 'react-router';

class Navbar extends Component {
  render() {
    return (<nav>
      <div className="nav-wrapper red lighten-1">
        <div className="container">
          <a href="#" className="brand-logo">Bloody Pixels</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Game</Link>
            </li>
            <li>
              <Link to="/players">Leaderboard</Link>
            </li>
            <li>
              <Link to="/rounds">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>)
  }
}

export default Navbar;
