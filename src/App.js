import { Wrapper, Container } from './components/UI';
import Recipients from './components/Recipients';
import Messages from './components/Messages';
import { ContextProvider } from './context/context';

function App() {
  return (
    <ContextProvider>
      <Wrapper>
        <Container>
          <Recipients />
          <Messages />
        </Container>
      </Wrapper>
    </ContextProvider>
  );
}

export default App;
