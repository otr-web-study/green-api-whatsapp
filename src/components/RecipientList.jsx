import RecipientItem from './RecipientItem';
import { useRecipientList } from '../hooks/useRecipientList';

const RecipientList = () => {
  const { items, onItemClick } = useRecipientList();

  const content = items.map((item) => (
    <li key={item.chatId}>
      <RecipientItem item={item} onClick={onItemClick} />
    </li>
  ));

  return <ul>{content}</ul>;
};

RecipientList.displayName = 'RecipientList';

export default RecipientList;
