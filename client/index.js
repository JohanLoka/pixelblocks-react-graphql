import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

import './resources/css/styling.css';
import './resources/css/custom.css';
//Components
import PlayerList from './components/pages/PlayerList';
import MapList from './components/pages/MapList';
import WaveList from './components/pages/WaveList';
import RoundList from './components/pages/RoundList';
import LiveData from './components/pages/LiveData';
import StartPage from './components/pages/StartPage';
import App from './components/App';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={StartPage}/>
          <Route path="/players" component={PlayerList}/>
          <Route path="/maps" component={MapList}/>
          <Route path="/waves" component={WaveList}/>
          <Route path="/rounds" component={RoundList}/>
          <Route path="/live" component={LiveData}/>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root/>, document.querySelector('#root'));
