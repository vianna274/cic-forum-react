import React, { useContext } from 'react';
import Nav from '../../shared/nav';
import { Container } from 'react-bootstrap';
import { ApplicationContext } from '../../contexts/application/application.state';
import { LinearProgress } from '@material-ui/core';

export default function Header() {

  const { state } = useContext(ApplicationContext);
  
  return (
    <Container fluid className="px-0">
      { state.loading && <LinearProgress></LinearProgress> }
      <Nav></Nav>
    </Container>
  );
}