import React, { useContext } from 'react';
import Nav from '../../shared/nav';
import { ApplicationContext } from '../../core/application/reducer';
import { LinearProgress } from '@material-ui/core';
import './style.scss';

export default function Header() {

  const { state } = useContext(ApplicationContext);

  const linearProgressClass = `linear-loading ' ${state.loading ? '-opacity' : '-no-opacity'}`;

  return (
    <div className="root-header container-fluid px-0">
      <LinearProgress className={linearProgressClass}></LinearProgress>
      <h1 className="text-center title py-2">CiC Forum</h1>
      <Nav></Nav>
    </div>
  );
}
