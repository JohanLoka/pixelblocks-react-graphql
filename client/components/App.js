import React, {Component} from 'react';

import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import Header from './partials/Header';

class App extends Component {
  render() {
    return (<div className="grey darken-4">
      <Navbar/>
      <div className="container">
        {this.props.children}
      </div>
      <Footer/>
    </div>)
  }
}

export default App;
