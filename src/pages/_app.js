import { useEffect, useState } from 'react'
import { defaultSettings } from '../config';
import { SettingsProvider } from '../contexts/SettingsContext'

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
    <SettingsProvider defaultSettings={settings}>
      <ThemeProvider>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </SettingsProvider>
  )
}

export default MyApp
