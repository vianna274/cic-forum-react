import React, { useContext } from 'react';
import Nav from '../../shared/nav';
import { ApplicationContext } from '../../core/application/reducer';
import { LinearProgress } from '@material-ui/core';
import './style.scss';

export default function Header() {

  const { state } = useContext(ApplicationContext);

  return (
    <div className="root-header container-fluid px-0 mb-3">
      <LinearProgress className={ state.loading ? '-opacity' : '-no-opacity'}></LinearProgress>
      <h1 className="text-center">CiC Forum</h1>
      <Nav></Nav>
    </div>
  );
}
