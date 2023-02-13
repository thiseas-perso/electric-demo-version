import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const Header = ({ className }) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  const currentTheme = theme === 'system' ? systemTheme : theme;
  if (!mounted) {
    return null;
  }

  return (
    <header className={className}>
      [Header]
      <button
        onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      >
        {currentTheme === 'dark' ? 'light' : 'dark'}
      </button>
    </header>
  );
};

export default Header;
