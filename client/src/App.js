import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-router';
import WelcomePage from './components/WelcomePage/welcomepage'
import SettingsPage from './components/AccountSettings/accountsettings'
import TheFooter from './components/FooterEle/index'
import Navbar from './components/Navbar'
import About from './components/NavbarPages/about'
import ContactUsPage from './components/FooterPages/ContactUs/index'
import DashboardPage from './components/Dashboard/index';
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
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/about-us' element={<ContactUsPage/>} />
        <Route path='/dashboard' element={<DashboardPage/>} />
        <Route path='/settings' element={<SettingsPage/>} />
      </Routes>
      <TheFooter />
    </Router>
    </ApolloProvider>
  );
}

export default App;
