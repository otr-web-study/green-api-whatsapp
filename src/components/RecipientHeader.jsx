import HeaderContainer from './UI/HeaderContainer';
import { useRecipientControls } from '../hooks/useRecipientsControls';
import { Logout, Settings, UserPlus } from './UI/icons';

const RecipientHeader = () => {
  const { logout, handleAddRecipientClick, handleSettingsClick } = useRecipientControls();

  return (
    <HeaderContainer>
      <button
        title="Add recipient"
        className="w-10 flex justify-center items-center"
        onClick={handleAddRecipientClick}
      >
        <UserPlus className="w-6 h-6 hover:stroke-bg_stripe" />
      </button>
      <button
        title="Settings"
        className="w-10 flex justify-center items-center"
        onClick={handleSettingsClick}
      >
        <Settings className="w-6 h-6 hover:stroke-bg_stripe" />
      </button>
      <button title="Logout" className="w-10 flex justify-center items-center" onClick={logout}>
        <Logout className="w-6 h-6 hover:stroke-bg_stripe" />
      </button>
    </HeaderContainer>
  );
};

export default RecipientHeader;
