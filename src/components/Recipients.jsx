import { useContext } from 'react';

import { AppContext } from '../context/context';
import Header from './RecipientHeader';
import RecipientList from './RecipientList';
import Login from './Login';

const Recipients = () => {
  const { isLoggedIn } = useContext(AppContext);
  const content = isLoggedIn ? (
    <>
      <Header />
      <RecipientList />
    </>
  ) : (
    <Login />
  );

  return (
    <section className="h-full w-1/3 min-w-[430px] border-recipients text-primary flex flex-col justify-stretch bg-white">
      {content}
    </section>
  );
};

export default Recipients;
