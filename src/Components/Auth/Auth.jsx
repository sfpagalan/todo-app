import React, { useContext } from 'react';
import { When } from 'react-if';

import { LoginContext } from '../../Context/Auth';

const Auth = ({ children, capability }) => {
  const { loggedIn, can } = useContext(LoginContext);
  const okToRender = loggedIn && (capability ? can(capability) : true);

  return (
    <When condition={okToRender}>
      {children}
    </When>
  );
};

export default Auth;
