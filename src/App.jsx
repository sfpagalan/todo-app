import React from 'react';
import Auth from './components/auth/auth';
import Login from './components/auth/login';
import LoginContext from './components/auth/context';

class App extends React.Component {
  render() {
    return (
      <LoginContext.Provider>
        <Login />
        <Auth>
          <div>Any valid user can see this</div>
        </Auth>
        <Auth capability="create">
          <div>Users with create access can see this</div>
        </Auth>
        <Auth capability="update">
          <div>Users with update access can see this</div>
        </Auth>
        <Auth capability="delete">
          <div>Users with delete access can see this</div>
        </Auth>
      </LoginContext.Provider>
    );
  }
}

export default App;
