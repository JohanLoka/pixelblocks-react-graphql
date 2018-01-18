import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

//Components
import PlayerList from './components/pages/PlayerList';
import MapList from './components/pages/MapList';
import RoundList from './components/pages/RoundList';
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
          <Route path="/rounds" component={RoundList}/>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root/>, document.querySelector('#root'));
