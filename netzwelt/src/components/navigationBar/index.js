import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getDisplayName, removeUserSession } from '../../utils/common';

const NavigationBar = props => {
    const history = useNavigate();
    const user = getDisplayName();

    const handleLogout = () => {
      removeUserSession();
      history('/login');
    }
   
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">Netzwelt</a>
          <div className="d-flex">
            <span className="text-light me-3 my-auto">Hi, { user }!</span>
            <input type="button" className="btn btn-light" onClick={handleLogout} value="Logout" />
          </div>
        </div>
      </nav>
    );
}

export default NavigationBar;