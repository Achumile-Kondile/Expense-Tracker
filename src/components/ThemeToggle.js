import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark', !darkMode);
    document.body.classList.toggle('text-white', !darkMode);
  };

  return (
    <Button variant="secondary" onClick={toggleTheme}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </Button>
  );
}

export default ThemeToggle;
