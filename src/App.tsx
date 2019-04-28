import React from 'react';

import UserProvider from './contexts/user/user.state';
import Router from './shared/router';
import ApplicationProvider from './contexts/application/application.state';

export default function App() {
  return (
    <ApplicationProvider>
      <UserProvider>
        <Router></Router>
      </UserProvider>
    </ApplicationProvider>
  );
}
