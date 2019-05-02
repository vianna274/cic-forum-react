import { Button, Paper } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../core/user/reducer';

export default function Home() {

  const { state } = useContext(UserContext);

  const renderInButtons = () => (
    <div className="pt-3 row">
      <div className="col">
        <Link to="forum">
          <Button
            fullWidth
            color="primary">Forum</Button>
        </Link>
      </div>
    </div>
  );

  const renderOutButtons = () => (
    <div className="pt-3 row">
      <div className="col">
        <Link to="login">
          <Button
            fullWidth
            color="primary">Sign in with a social media</Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-10 col-md-8 col-lg-6">
        <Paper className="px-3 pt-5 pb-3">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center flex-column">
              {state.user
                ? <p className="px-3">
                  Seja bem vindo novamente <b>{state.user.firstName} {state.user.lastName}</b>
                </p>
                : <p className="px-3">
                  CiC forum é um website aonde você encontrará
                  materiais de todos os semestres e cadeiras
                  do curso de Ciência da Computação da UFRGS
                  (Universidade Federal do Rio Grande do Sul)
                  </p>}
            </div>
          </div>
          {state.user
            ? renderInButtons()
            : renderOutButtons()}
        </Paper>
      </div>
    </div>
  );
}
