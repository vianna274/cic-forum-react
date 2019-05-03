import './style.scss';

import { Fab, Icon, PropTypes } from '@material-ui/core';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

export interface FloatButtonMain {
  icon: string;
  color: PropTypes.Color;
}

export interface FloatButtonOption {
  url: string;
  icon: string;
  color: PropTypes.Color;
}

export interface FloatButtonProps {
  main: FloatButtonMain;
  options: FloatButtonOption[];
  history: any;
}

function FloatButton({ main, options, history }: FloatButtonProps) {
  const [open, setOpen] = useState(false);

  const renderMenuButtons = () => <ul className={`menu-buttons ${open ? '' : '-hidden'}`}>
    {options.map((option, index) => <li key={index}>
      <Fab
        className="menu-button my-1"
        color={option.color}
        onClick={() => { history.push(option.url); setOpen(!open); }}>
        <Icon>
          {option.icon}
        </Icon>
      </Fab>
    </li>)}
  </ul>;

  return (
    <div className="float-button">
      {renderMenuButtons()}
      <Fab
        id="float-button-main"
        className="mt-1"
        color={main.color}
        onClick={() => setOpen(!open)}>
        <Icon className={open ? '-reverse' : '-normal'}>
          {main.icon}
        </Icon>
      </Fab>
    </div>
  );
}

export default withRouter(FloatButton);
