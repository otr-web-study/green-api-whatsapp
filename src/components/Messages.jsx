import Header from './UI/HeaderContainer';
import MessageList from './MessageList';
import Footer from './Footer';
import Greeting from './Greeting';

const Messages = () => {
  return (
    <section className="h-full w-2/3 flex flex-col justify-stretch">
      <Header />
      <Greeting />
      <Footer />
    </section>
  );
};

export default Messages;
