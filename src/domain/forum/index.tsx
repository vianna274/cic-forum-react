import React from 'react';
import { Container } from 'react-bootstrap';

import ForumProvider from './reducer';
import ForumRouter from './router';

export default function Forum(props) {
  return (
    <Container>
      <ForumProvider>
        <ForumRouter />
      </ForumProvider>
    </Container>
  );
}
