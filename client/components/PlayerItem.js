import React, {Component} from 'react';
import {Link} from 'react-router';

class PlayerItem extends Component {

  render() {
    return (
      <Link to="/">
        <div className="row grow">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{this.props.data.username}</span>
                <p>Highscore: {this.props.data.highscore}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

}

export default PlayerItem;
