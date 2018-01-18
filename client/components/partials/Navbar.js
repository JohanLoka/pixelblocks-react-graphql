import React, {Component} from 'react';
import {Link} from 'react-router';

class Navbar extends Component {
  render() {
    return (<nav>
      <div className="nav-wrapper pink">
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
              <Link to="/rounds">Rounds</Link>
            </li>
            <li>
              <Link to="/maps">Maps</Link>
            </li>
            <li>
              <Link to="/">Events</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>)
  }
}

export default Navbar;
