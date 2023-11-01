import React, { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';

const Settings = () => {
  const { settings, saveSettings } = useContext(SettingsContext);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    saveSettings({ ...settings, [name]: value });
  };

  return (
    <form>
      <input type="checkbox" name="showCompleted" onChange={handleChange} checked={settings.showCompleted} />
    </form>
  );
};

export default Settings;