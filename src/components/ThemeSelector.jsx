import React, { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';

const ThemeSelector = () => {
  const { dispatch, theme } = useContext(ContactContext);

  const handleThemeChange = themeValue => {
    dispatch({ type: 'SET_THEME', payload: themeValue });
  };

  return (
    <div className="theme-selector">
      <button
        className={`theme-button ripple ${theme === 'light' ? 'active' : ''}`}
        onClick={() => handleThemeChange('light')}
      >
        روشن
      </button>
      <button
        className={`theme-button ripple ${theme === 'dark' ? 'active' : ''}`}
        onClick={() => handleThemeChange('dark')}
      >
        تیره
      </button>
      <button
        className={`theme-button ripple ${theme === 'colorful' ? 'active' : ''}`}
        onClick={() => handleThemeChange('colorful')}
      >
        رنگارنگ
      </button>
    </div>
  );
};

export default ThemeSelector;