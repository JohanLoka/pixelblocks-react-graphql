import React, {Component} from 'react';
import {Link} from 'react-router';

class AdminNavbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="col s12">
            <a href="#!" className="breadcrumb">
              <Link to="/maps">Maps</Link>
            </a>
            <a href="#!" className="breadcrumb">
              <Link to="/waves">Waves</Link>
            </a>
            <a href="#!" className="breadcrumb">
              <Link to="/rounds">Rounds</Link>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default AdminNavbar;
