import React from 'react';

import UserProvider from './core/user/reducer';
import Router from './shared/router';
import ApplicationProvider from './core/application/reducer';

export default function App() {
  return (
    <ApplicationProvider>
      <UserProvider>
        <Router></Router>
      </UserProvider>
    </ApplicationProvider>
  );
}
