import { useContext } from 'react';

import { AppContext } from '../context/context';
import Button from './UI/Button';

const StateButton = ({ children, onClick, extraClass = '' }) => {
  const { loading } = useContext(AppContext);

  const className = `${extraClass} ${loading ? 'hover:bg-bg_stripe/80' : ''}`;

  return (
    <Button onClick={onClick} extraClass={className} disabled={loading}>
      {!loading && children}
      {loading && 'Processing'}
    </Button>
  );
};

export default StateButton;
