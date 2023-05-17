import { useLoginForm } from '../hooks/useLoginForm';
import StateButton from './StateButton';

const Login = () => {
  const {
    idInstance,
    apiTokenInstance,
    onIdInstanceChange,
    onApiTokenInstanceChange,
    loginBtnClick,
  } = useLoginForm();

  return (
    <form className="h-full flex flex-col justify-center items-center px-6 gap-4">
      <input
        value={idInstance}
        name="idInstance"
        id="idInstance"
        placeholder="idInstance"
        className="w-full bg-bg_gray h-9 px-3 rounded focus:outline-bg_stripe"
        onChange={onIdInstanceChange}
      ></input>
      <input
        value={apiTokenInstance}
        name="apiTokenInstance"
        id="apiTokenInstance"
        placeholder="apiTokenInstance"
        className="w-full bg-bg_gray h-9 px-3 rounded focus:outline-bg_stripe"
        onChange={onApiTokenInstanceChange}
      ></input>
      <StateButton onClick={loginBtnClick}>Sign in</StateButton>
    </form>
  );
};

export default Login;
