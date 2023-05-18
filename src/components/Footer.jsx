import TextareaAutosize from 'react-textarea-autosize';
import { Airplain } from './UI/icons';
import { useSendMessage } from '../hooks/useSendMessage';

const Footer = () => {
  const { message, onMessageChange, handleSendMessage } = useSendMessage();

  return (
    <footer className="min-h-[62px] flex items-center gap-2 bg-bg_gray px-4 py-3">
      <div className="flex items-center min-h-[42px] w-full bg-white rounded-lg px-2">
        <TextareaAutosize
          value={message}
          onChange={onMessageChange}
          className="min-h-[20px] w-full outline-none"
        />
      </div>
      <button
        onClick={handleSendMessage}
        title="send"
        className="w-10 h-10 flex justify-center items-center"
      >
        <Airplain className="w-8 h-8 hover:stroke-bg_stripe" />
      </button>
    </footer>
  );
};

export default Footer;
