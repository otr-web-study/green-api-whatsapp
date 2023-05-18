import HeaderContainer from './UI/HeaderContainer';
import { Reload } from './UI/icons';
import { useMessagesControls } from '../hooks/useMessagesControls';

const MessageHeader = () => {
  const { onRefreshClick } = useMessagesControls();

  return (
    <HeaderContainer>
      <button
        title="Refresh"
        onClick={onRefreshClick}
        className="w-10 flex justify-center items-center"
      >
        <Reload className="w-6 h-6 hover:stroke-bg_stripe" />
      </button>
    </HeaderContainer>
  );
};

export default MessageHeader;
