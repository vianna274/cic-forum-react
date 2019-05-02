import './nav.scss';

import { Icon, IconButton, MenuItem } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from 'react-sidebar';

import { FirebaseAuth } from '../../core/firebase/handler';
import { UserContext } from '../../core/user/reducer';

export default function Nav() {

  const [open, setOpen] = useState(false);
  const { state } = useContext(UserContext);

  const renderLoginNav = () => (
    <div className="d-flex justify-content-center flex-column px-2">
      <img className="profile-pic mt-5 mb-3" src={state.firebaseUser!.photoURL || ''} alt="Profile" />
      <p className="name"> {state.firebaseUser!.displayName} </p>
      <Link to="/">
        <MenuItem onClick={() => setOpen(false)}>Home</MenuItem>
      </Link>
      <Link to="profile">
        <MenuItem onClick={() => setOpen(false)}>Profile</MenuItem>
      </Link>
      <Link to="forum">
        <MenuItem onClick={() => setOpen(false)}>Forum</MenuItem>
      </Link>
      <MenuItem onClick={() => FirebaseAuth.getAuth().signOut() && setOpen(false)}>Logout</MenuItem>
    </div>
  );

  const renderLogoutNav = () => (
    <div className="d-flex justify-content-center flex-column px-2">
      <Link to="/" >
        <MenuItem onClick={() => setOpen(false)}>Home</MenuItem>
      </Link>
      <Link to="/login" >
        <MenuItem onClick={() => setOpen(false)}>Sign in</MenuItem>
      </Link>
    </div>
  );

  return (
    <Sidebar
      sidebarClassName="custom-sidebar-class"
      sidebar={<div>
        <IconButton 
          color="primary"
          onClick={() => setOpen(!open)}>      
          <Icon color="primary">menu_circle</Icon>
        </IconButton>
        {state.user
          ? renderLoginNav()
          : renderLogoutNav()
        }
      </div>}
      open={open}
      onSetOpen={setOpen}>
      <IconButton 
        color="primary"
        className="menu-button"
        onClick={() => setOpen(!open)}>      
        <Icon color="primary">menu_circle</Icon>
      </IconButton>
    </Sidebar>

  );
}
