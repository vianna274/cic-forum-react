import React from 'react';

import UserProvider from './core/user/user.state';
import Router from './shared/router';
import ApplicationProvider from './core/application/application.state';

export default function App() {
  return (
    <ApplicationProvider>
      <UserProvider>
        <Router></Router>
      </UserProvider>
    </ApplicationProvider>
  );
}
