import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

import App from './components/App';
import SongCreate from './components/SongCreate';

import './components/App.css';
import './style/style.css';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>

        <Switch>
          <Route exact path="/songs/new" component={SongCreate} />

          <Route exact path="/" component={App}/>

        </Switch>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(
    <Root />,
  document.querySelector('#root')
);
