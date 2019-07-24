import { ApolloClient } from 'apollo-boost'

import { HttpLink } from 'apollo-link-http'

import { InMemoryCache } from 'apollo-cache-inmemory'

const link_http = new HttpLink({ uri: `http://localhost:4000/graphql` });

const config =
  {
    link: link_http,
    cache: new InMemoryCache()
  };

const client = new ApolloClient(config);


export default client;