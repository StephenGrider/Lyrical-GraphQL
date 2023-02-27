import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Route, Switch, HashRouter } from "react-router-dom";

import Layout from "./components/Layout";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

import "./style/style.css";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  dataIdFromObject: (o) => o.id,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <HashRouter>
          <Switch>
            <Route path="/song/new">
              <SongCreate />
            </Route>
            <Route path="/song/:id">
              <SongDetail />
            </Route>
            <Route path="/">
              <SongList />
            </Route>
          </Switch>
        </HashRouter>
      </Layout>
    </ApolloProvider>
  );
};

const rootEl = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);
