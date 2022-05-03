import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Start from './pages/Start.js';
import Chat from './pages/Chat.js';
import Login from './pages/Login.js';
import Nav from './components/nav.js';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-space-around">
          <Nav />
          <Routes>
            <Route 
              path="/" 
              element={<Start />}
            />
            <Route 
              path="/chat" 
              element={<Chat />}
            />
            <Route 
              path="/login" 
              element={<Login />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
