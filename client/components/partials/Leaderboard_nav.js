import React, {PropTypes} from 'react';

import Leaderboard from '../leaderboard/Leaderboard';

export default class LeaderboardNav extends React.Component {

  navbar() {
    return (
      <div>
        <div className="col m4"></div>
        <nav className="nav-extended col m4 #263238 blue-grey darken-4 container">
          <ul className="tabs tabs-transparent">
            <li className="tab">
              <a className="active text-danger" href="#ranked_leaderboard">Leaderboard</a>
            </li>
            <li className="tab">
              <a href="#dungeon_leaderboard">Dungeon</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }

  ranked() {
    return (
      <div id="ranked_leaderboard" className="col s12">
        <div className="row spacing-t center-align">
          <div className="col m6 center-align">
            <h5>Top 5 Alltime</h5>
            <Leaderboard key="alltime" path="/rounds/toplist"/>
          </div>
          <div className="col m6 center-align">
            <h5>Top 5 Today</h5>
            <Leaderboard key="today" path="/rounds/toplist/today"/>
          </div>
        </div>
      </div>
    );
  }

  dungeon() {
    return (
      <div id="dungeon_leaderboard" className="col s12">
        <div className="row spacing-t center-align">
            <div className="col m6 center-align">
              <h5>Top 5 Alltime</h5>
              <Leaderboard key="alltime" path="/rounds/toplist"/>
            </div>
            <div className="col m6 center-align">
              <h5>Todays Dungeon:{'  '}
                <span className="red-text">Old Temple</span>
              </h5>
              <Leaderboard key="today" path="/rounds/toplist/today"/>
            </div>
          </div>
        </div>
    );
  }

  render() {
    return (
      <div className="row spacing-t center-align">
        <div className="row">
          {this.ranked()}
        </div>
      </div>
    );
  }
}
