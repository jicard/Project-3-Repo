import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-router';
import WelcomePage from './components/WelcomePage/welcomepage'
//import AccountSettings from './components/AccountSettings/accountsettings'
import List from './components/list/index'
import TheFooter from './components/footer/index'
import Navbar from './components/Navbar'
import About from './components/NavbarPages/about'
import ContactUs from './components/FooterPages/ContactUs/contactUs'
import LoginSignupButton from './components/Login/Button';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Navbar />
      <LoginSignupButton />
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/aboutus' element={<ContactUs/>} />
      </Routes>
      <TheFooter />
    </Router>
    </ApolloProvider>
  );
}

export default App;
