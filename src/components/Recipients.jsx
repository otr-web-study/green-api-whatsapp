import { useContext } from 'react';

import { AppContext, NEW_RECIPIENT_PANEL, SETTINGS_PANEL } from '../context/context';
import Header from './RecipientHeader';
import RecipientList from './RecipientList';
import Login from './Login';
import NewRecipient from './NewRecipient';
import Settings from './Settings';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Recipients = () => {
  useLocalStorage();

  const { isLoggedIn, activePanel } = useContext(AppContext);
  let content;

  if (isLoggedIn) {
    if (activePanel === NEW_RECIPIENT_PANEL) {
      content = <NewRecipient />;
    } else if (activePanel === SETTINGS_PANEL) {
      content = <Settings />;
    } else {
      content = (
        <>
          <Header />
          <RecipientList />
        </>
      );
    }
  } else {
    content = <Login />;
  }

  return (
    <section className="h-full w-1/3 min-w-[430px] border-recipients text-primary flex flex-col justify-stretch bg-white">
      {content}
    </section>
  );
};

export default Recipients;
