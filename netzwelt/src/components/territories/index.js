import React from 'react';
import { useNavigate } from 'react-router-dom';
 
const Territories = props => {
  const history = useNavigate();
 
  // handle click event of logout button
  const handleLogout = () => {
    history('/login');
  }
 
  return (
    <div>
      Welcome User!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Territories;