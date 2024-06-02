// src/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://your-graphql-endpoint' }),
  cache: new InMemoryCache(),
});

export default client;
