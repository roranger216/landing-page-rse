import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';


const Darkmode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <BsSun
          className="w-5 h-5"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <FaMoon
          className="w-5 h-5"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
      <div className="flex items-center">
        {renderThemeChanger()}
      </div>
  );
};

export default Darkmode;