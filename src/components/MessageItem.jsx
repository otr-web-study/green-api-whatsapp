import { unixtimestampToTime } from '../utils/formatTime';

const MessageItem = ({ item: { text, dateAt, income } }) => {
  const className = `relative flex px-2 py-2 max-w-[70%] rounded-md ${
    income
      ? 'bg-white justify-self-start after:content-[""] after:absolute after:top-[-4px] after:left-[-10px] after:left-figure'
      : 'bg-bg_outgoing justify-self-end after:content-[""] after:absolute after:top-[-4px] after:right-[-10px] after:right-figure'
  }`;

  return (
    <div className={className}>
      <p className="text-sm mr-9 ">{text}</p>
      <p className="absolute bottom-0 right-1 text-[11px] text-bubble_meta">
        {unixtimestampToTime(dateAt)}
      </p>
    </div>
  );
};

export default MessageItem;
