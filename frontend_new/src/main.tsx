import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Toaster } from './components/shadcn/ui/toaster.tsx';


const client = new ApolloClient({
  uri: 'http://localhost:8081',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Toaster />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
