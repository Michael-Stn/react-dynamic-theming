import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThemeContext from './contexts/ThemeContext';
import Home from './components/Home';
import About from './components/About';
import i18nConfig from './i18n.config';
import useTheme from './hooks/useTheme';

const navigation = [
  { name: 'Home', href: '' },
  { name: 'About', href: '/about' },
];

const languages = ['EN', 'ES'];

const themeModes = ['light', 'dark', 'solarized'];

function App() {
  const localLanguage = localStorage.getItem('language') ?? languages[0];
  const [language, setLanguage] = useState(localLanguage);
  const [i18n, setI18n] = useState(i18nConfig[language]);

  const [themeMode, setThemeMode] = useTheme();

  useEffect(() => {
    themeModes
      .filter((t) => t !== themeMode)
      .forEach((t) => document.documentElement.classList.remove(t));
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  const changeLanguage = (lan) => {
    setLanguage(lan);
    setI18n(i18nConfig[lan]);
    localStorage.setItem('language', lan);
  };

  const context = {
    changeLanguage,
    i18n,
    language,
    setI18n,
    setThemeMode,
  };

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={context}>
          <Navbar navigation={navigation} languages={languages} />
          <Routes>
            <Route path={navigation[0].href} element={<Home />} />
            <Route path={navigation[1].href} element={<About />} />
          </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
