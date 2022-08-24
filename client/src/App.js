import React from 'react';
import { Container } from '@material-ui/core';
import {BrowserRouter, Routes , Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';


const App = () => (
  <GoogleOAuthProvider clientId="421153733119-peh9mtfqrmbvhpsr6et4dnfc7hfh099p.apps.googleusercontent.com">
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Auth/>} />
      </Routes>
    </Container>
  </BrowserRouter>
  </GoogleOAuthProvider>
);

export default App;