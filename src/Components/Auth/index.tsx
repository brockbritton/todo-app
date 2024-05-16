import { useContext } from 'react';
import { When } from 'react-if';
import { LoginContext } from '../../Context/Auth';

function Login(props) {

  const contextType = useContext(LoginContext);

  const isLoggedIn = contextType.loggedIn;
  const canDo = props.capability ? contextType.can(props.capability) : true;
  const okToRender = isLoggedIn && canDo;

  return (
    <When condition={okToRender}>
      {props.children}
    </When>
  );
}

export default Login;