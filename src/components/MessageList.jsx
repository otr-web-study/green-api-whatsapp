import { useMessageList } from '../hooks/useMessageList';
import MessageItem from './MessageItem';

const MessageList = () => {
  const { messageList } = useMessageList();

  const content = messageList.map((item) => (
    <li className="grid" key={item.id}>
      <MessageItem item={item} />
    </li>
  ));

  return (
    <div className="relative h-full bg-bg_conv_panel px-14 py-6">
      <div className="absolute h-full w-full top-0 left-0 bg-messages opacity-40 z-0"></div>
      <ul className="relative h-full flex gap-3 flex-col justify-end opacity-100 z-10">
        {content}
      </ul>
    </div>
  );
};

export default MessageList;
