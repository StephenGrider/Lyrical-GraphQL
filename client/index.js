import './style/style.css';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { InMemoryCache } from 'apollo-cache-inmemory';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import { createHttpLink } from "apollo-link-http";
import App from './components/App';
import SongDetail from './components/SongDetail';

const cache = new InMemoryCache();

const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql"
});

const client = new ApolloClient({
    link: httpLink,
    cache
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    <App children={<SongList />}></App>
                </Route>
                <Route exact path="/songs/new">
                    <App children={<SongCreate />}></App>
                </Route>
                <Route path="/songs/:id">
                    <App children={<SongDetail />}></App>
                </Route>
            </Switch>
        </HashRouter>
    </ApolloProvider>
)
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);