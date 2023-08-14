// return the user data from the session storage
export const getUser = () => {
    return sessionStorage.getItem('username') || null;
  }
   
  // return the display name from the session storage
  export const getDisplayName = () => {
    return sessionStorage.getItem('displayName') || null;
  }

  // return the roles from the session storage
  export const getRoles = () => {
    return sessionStorage.getItem('roles') || null;
  }
   
  // remove the display name, roles and username from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('displayName');
    sessionStorage.removeItem('roles');
    sessionStorage.removeItem('username');
  }
   
  // set the token and user from the session storage
  export const setUserSession = (displayName, roles, username) => {
    sessionStorage.setItem('displayName', displayName);
    sessionStorage.setItem('roles', roles);
    sessionStorage.setItem('username', username);
  }