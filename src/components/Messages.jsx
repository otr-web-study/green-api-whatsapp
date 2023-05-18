import { useContext } from 'react';

import MessageHeader from './MessageHeader';
import MessageList from './MessageList';
import Footer from './Footer';
import Greeting from './Greeting';
import { AppContext } from '../context/context';

const Messages = () => {
  const { selectedRecipient } = useContext(AppContext);
  let content;

  if (selectedRecipient) {
    content = (
      <main className="grid grid-rows-layout h-full">
        <MessageHeader />
        <MessageList />
        <Footer />
      </main>
    );
  } else {
    content = <Greeting />;
  }

  return <section className="h-full w-2/3">{content}</section>;
};

export default Messages;
