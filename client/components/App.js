import React, {Component} from 'react';

import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import Header from './partials/Header';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <div className="container">
        {this.props.children}
      </div>
    </div>)
  }
}

export default App;
