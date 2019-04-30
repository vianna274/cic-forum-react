import { Button, Paper } from '@material-ui/core';
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../core/user/reducer';

export default function Home() {

  const { state } = useContext(UserContext);

  const renderInButtons = () => (
    <Row className="pt-3">
      <Col>
        <Link to="forum">
          <Button
            fullWidth
            color="primary">Forum</Button>
        </Link>
      </Col>
    </Row>
  );

  const renderOutButtons = () => (
    <Row className="pt-3">
      <Col>
        <Link to="login">
          <Button
            fullWidth
            color="primary">Sign in with a social media</Button>
        </Link>
      </Col>
    </Row>
  );

  return (
    <Container className=" d-flex justify-content-center">
      <Col sm={10} md={8} lg={6}>
        <Paper className="px-5 pt-5 pb-3">
          <Row>
            <Col className="d-flex justify-content-center align-items-center flex-column">
              <h1>CiC Forum</h1>
              <p className="px-3">
                Bem vindo ao forum do curso Ciencia da Computacao da UFRGS :)
              </p>
            </Col>
          </Row>
          { state.user 
            ? renderInButtons()
            : renderOutButtons() }
        </Paper>
      </Col>
    </Container>
  );
}