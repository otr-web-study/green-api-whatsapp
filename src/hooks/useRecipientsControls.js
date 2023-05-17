import { useContext } from 'react';

import { AppContext, NEW_RECIPIENT_PANEL, SETTINGS_PANEL } from '../context/context';

export const useRecipientControls = () => {
  const { activePanel, logout, setActivePanel } = useContext(AppContext);

  const handleAddRecipientClick = () => {
    setActivePanel(NEW_RECIPIENT_PANEL);
  };

  const handleSettingsClick = () => {
    setActivePanel(SETTINGS_PANEL);
  };

  const closePanel = () => {
    setActivePanel('');
  };

  return {
    activePanel,
    logout,
    handleAddRecipientClick,
    handleSettingsClick,
    closePanel,
  };
};
