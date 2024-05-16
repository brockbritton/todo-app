import React, { useContext, useState } from 'react';
import { When } from 'react-if';
import { LoginContext } from '../../Context/Auth';

function Login() {
  const loginContext = useContext(LoginContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    if (e.target.name === 'username') setUsername(e.target.value);
    else if (e.target.name === 'password') setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(loginContext)
    loginContext.login(userPass.username, userPass.password);
  };

  return (
    <>
      <When condition={loginContext.loggedIn}>
        <button onClick={loginContext.logout}>Log Out</button>
      </When>

      <When condition={!loginContext.loggedIn}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="UserName"
            name="username"
            onChange={handleChange}
          />
          <input
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
      </When>
    </>
  );
}

export default Login;