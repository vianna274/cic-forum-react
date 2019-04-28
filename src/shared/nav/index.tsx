import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user/user.state';

export default function Nav() {

  const [anchorEl, setAnchorEl] = useState();
  const { state } = useContext(UserContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const renderLoggedMenu = () => (
    <div>
      <IconButton
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <Link to="/">
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
      </Menu>
    </div>
  );

  const renderNormalMenu = () => (
    <div>
      <IconButton
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <Link to="/" >
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link to="/login" >
          <MenuItem onClick={handleClose}>Sign in</MenuItem>
        </Link>
        <Link to="/signup" >
          <MenuItem onClick={handleClose}>Sign Up</MenuItem>
        </Link>
      </Menu>
    </div>
  );

  return state.auth
    ? renderLoggedMenu()
    : renderNormalMenu();
}
