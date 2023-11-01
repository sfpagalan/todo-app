import React, { createContext, useState, useEffect } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = (props) => {
  const [settings, setSettings] = useState({
    showCompleted: true,
    itemsPerPage: 5,
    sortField: 'difficulty'
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem('settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const saveSettings = (newSettings) => {
    setSettings(newSettings);
    localStorage.setItem('settings', JSON.stringify(newSettings));
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {props.children}
    </SettingsContext.Provider>
  );
};
