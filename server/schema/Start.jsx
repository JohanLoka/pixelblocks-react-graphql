import React from 'react';

export var Start = React.createClass({
  render() {
    return (
      <div className="text-center jumbotron">
        <h3 className="text-dark">Welcome to my projects platform.</h3>
        <h5 className="text-dark mt-3">What I code?</h5>
        <img src="https://i.imgur.com/r0M00W9.png" className="img-fluid mr-5 mt-3 grow thumbnail-start" alt="Responsive image"/>
        <img src="https://i.imgur.com/S2HGnqq.png"  className="img-fluid mr-5 mt-3 grow thumbnail-start" alt="Responsive image"/>
      </div>
    )
  }
});

module.exports = Start;
