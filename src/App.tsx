import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { ToastContainer } from 'react-toastify';

import ApplicationProvider from './core/application/reducer';
import UserProvider from './core/user/reducer';
import Router from './domain/router';

export default function App() {
  return (
    <ApplicationProvider>
      <UserProvider>
        <Router></Router>
        <ToastContainer />
      </UserProvider>
    </ApplicationProvider>
  );
}
