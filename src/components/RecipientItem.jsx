import { DefaultUser } from './UI/icons';

const RecipientItem = ({ item, onClick }) => {
  const { title, chatId, active } = item;
  const className = `h-[70px] flex items-center gap-2 px-4 py-2 shadow-sm font-medium cursor-pointer hover:bg-bg_gray_hover ${
    active ? 'bg-panel_bg_lighter' : ''
  }`;

  return (
    <div className={className} onClick={() => onClick(chatId)}>
      <DefaultUser className="w-14 h-14" />
      <h2 className="w-full bold">{title}</h2>
    </div>
  );
};

export default RecipientItem;
