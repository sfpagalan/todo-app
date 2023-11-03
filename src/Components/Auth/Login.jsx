import React, { useState, useContext } from 'react';
import { When } from 'react-if';

import { LoginContext } from '../../Context/Auth';

const Login = () => {
  const authContext = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    authContext.login(username, password);
  };

  return (
    <>
      <When condition={authContext.loggedIn}>
        <button onClick={authContext.logout}>Log Out</button>
      </When>
      <When condition={!authContext.loggedIn}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="UserName"
            name="username"
            value={username}
            onChange={handleChangeUsername}
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
          <button>Login</button>
        </form>
      </When>
    </>
  );
};

export default Login;
