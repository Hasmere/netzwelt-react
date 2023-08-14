import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getDisplayName, removeUserSession } from '../../utils/common';
 
const Dashboard = props => {
  const history = useNavigate();
  const user = getDisplayName();
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    history('/login');
  }
 
  return (
    <div>
      Welcome {user}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Dashboard;