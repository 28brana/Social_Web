import { useEffect, useState } from 'react'
import { defaultSettings } from '../config';
import { SettingsProvider } from '../contexts/SettingsContext'

import '../styles/globals.css'
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

  return (
    <SettingsProvider defaultSettings={settings}>
      <Component {...pageProps} />
    </SettingsProvider>
  )
}

export default MyApp
