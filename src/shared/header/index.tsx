import React, { useContext } from 'react';
import Nav from '../../shared/nav';
import { Container } from 'react-bootstrap';
import { ApplicationContext } from '../../core/application/application.state';
import { LinearProgress } from '@material-ui/core';
import './header.scss';

export default function Header() {

  const { state } = useContext(ApplicationContext);
  
  return (
    <Container fluid className="px-0">
      <LinearProgress className={ state.loading ? '-opacity' : '-no-opacity'}></LinearProgress>
      <Nav></Nav>
    </Container>
  );
}