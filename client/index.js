import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Route, Router, hashHistory, IndexRoute } from "react-router";

import SongList from "./components/SongList";
import App from "./components/App";
import SongCreate from "./components/SongCreate";

import "./style/style.css";

const apolloClient = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="/song/new" component={SongCreate} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
