import { useEffect, useState } from 'react'
import { defaultSettings } from '../config';
import { SettingsProvider } from '../contexts/SettingsContext'
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';
// Import slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../styles/globals.css'
import ThemeProvider from '../theme';
import { getSettings } from '../utils/getSettings';

function MyApp({ Component, pageProps }) {
  const [isMounted, setMounted] = useState(false);
  const [settings, setSettings] = useState(defaultSettings)
  useEffect(() => {
    if (!isMounted) {
      setSettings(getSettings);
    }
    setMounted(true);
  }, [])

  const getLayout = Component.getLayout ?? ((page) => page);


  return (
    <ReduxProvider store={store}>
      <SettingsProvider defaultSettings={settings}>
        <ThemeProvider>
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </SettingsProvider>
    </ReduxProvider>
  )
}

export default MyApp
