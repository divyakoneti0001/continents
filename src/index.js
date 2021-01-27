import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


//initializing the Client
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/'
})

ReactDOM.render(
  <BrowserRouter>
      <ApolloProvider client={client}>
        <React.StrictMode>
           <App />
        </React.StrictMode>
      </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorkerRegistration.register();
reportWebVitals();


