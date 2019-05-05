import React from 'react';

import ForumProvider from './reducer';
import ForumRouter from './router';

export default function Forum(props) {
  return (
    <div className="container-fluid h-100 px-0">
      <ForumProvider>
        <ForumRouter />
      </ForumProvider>
    </div>
  );
}
