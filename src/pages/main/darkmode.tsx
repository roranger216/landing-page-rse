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
        <div 
          className="darkmode flex flex-row items-center gap-4"
          role="button"
          onClick={() => setTheme('light')}
        >
          <BsSun
            className="text-lg md:text-xl"
          />
        </div>
      );
    } else {
      return (
        <div className="darkmode flex flex-row items-center gap-4"
          role="button"
          onClick={() => setTheme('dark')}
        >
          <FaMoon
            className="text-base md:text-xl"
          />
        </div>
        
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