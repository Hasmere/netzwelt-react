import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserSession } from '../../utils/common';
import axios from 'axios';

const Login = props => {
  const history = useNavigate();
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setError(null);
    setLoading(true);
  
    const requestData = {
      username: username.value,
      password: password.value
    };
  
    axios.post(
      'https://cors-anywhere.herokuapp.com/https://netzwelt-devtest.azurewebsites.net/Account/SignIn',
      requestData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/plain'
        }
      }
    ).then(response => {
      setLoading(false);
      setUserSession(response.data.displayName, response.data.roles, response.data.username);
      history('/');
    }).catch(error => {
      setLoading(false);
      if (error.response && error.response.status === 404) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    });
  };
  
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card bg-white">
              <div className="card-body p-5">
                <form className="mb-3 mt-md-4">
                  <h2 className="fw-bold text-uppercase mb-4">Netzwelt</h2>
                    {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                    <div className="form-floating mb-3">
                        <input type="text" {...username} className="form-control" id="floatingInput" placeholder="Username" autoComplete="on"/>
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" {...password} className="form-control" id="floatingPassword" placeholder="Password" autoComplete="on" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>                
                    <div className="d-grid">
                        <input type="button" className="btn btn-dark" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
                    </div>
                </form> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;