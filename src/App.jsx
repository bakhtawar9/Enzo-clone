import React, { useEffect } from 'react';
import Routes from './routes/Routing';
import { useTranslation } from 'react-i18next';
import { Button } from "@mui/material";


const App = () => {

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {

    console.log({lng})
    i18n.changeLanguage(lng);
};

  useEffect(() => {
    console.log({ i18n: i18n.language })
  }, [i18n])


  return (
    <>
      <Routes />
      <div style={{
        position: 'absolute', bottom: '5px', right: '20px',
        zIndex: 999,
        display: 'flex',
        justifyContent: 'start',
        alignItems: "center",
      }}>
        <Button style={{
          bottom: "1rem",
          right: "1.5rem",
          borderRadius: "2rem",
          background: 'linear-gradient(135deg, #16e9c2, #23a3eb)',
          color: '#fff',
          padding: '5px 15px',
          fontSize: '14px',
          marginRight: '10px',
          textTransform: 'none',
        }} onClick={() => changeLanguage('en')}>English</Button>
        <Button style={{
           bottom: "1rem",
          right: "1.5rem",
          borderRadius: "2rem",
          background: 'linear-gradient(135deg, #16e9c2, #23a3eb)',
          color: '#fff',
          padding: '5px 15px',
          fontSize: '14px',
          textTransform: 'none',
        }} onClick={() => changeLanguage('es')}>Français</Button>
      </div>

    </>
  );
};

export default App;