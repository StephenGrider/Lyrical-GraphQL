import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

import App from './components/App';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router >
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
