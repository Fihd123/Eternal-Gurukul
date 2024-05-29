import {createContext, useState} from 'react';

export const langContext = createContext();

export const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = lang => {
    setLanguage(lang);
  };

  const toggleLanguage = () => {
    if (language === 'en') {
      setLanguage('bg');
      // console.log(language);
    } else {
      setLanguage('en');
      // console.log(language);
    }
  };
  const value = {
    language,
    setLanguage,
    changeLanguage,
    toggleLanguage,
  };
  return <langContext.Provider value={value}>{children}</langContext.Provider>;
};
