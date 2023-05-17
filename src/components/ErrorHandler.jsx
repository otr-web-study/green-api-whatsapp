import { useContext } from 'react';

import { AppContext } from '../context/context';
import ModalContainer from './UI/ModalContainer';
import Button from './UI/Button';

const ErrorHandler = () => {
  const { errorMessage, setErrorMessage } = useContext(AppContext);

  if (!errorMessage) {
    return null;
  }

  const closeHandler = () => setErrorMessage('');

  return (
    <ModalContainer onClose={closeHandler}>
      <h2>{errorMessage}</h2>
      <Button onClick={closeHandler}>Close</Button>
    </ModalContainer>
  );
};

export default ErrorHandler;
