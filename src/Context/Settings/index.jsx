import { createContext, useContext } from 'react';

export const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
  const defaultSettings = {
    itemsToShow: 3,
    hideCompleted: true,
    sort: 'difficulty',
  };
  return (
    <SettingsContext.Provider value={defaultSettings}>
      {children}
    </SettingsContext.Provider>
  );
};
