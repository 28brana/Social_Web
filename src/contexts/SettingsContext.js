import { createContext, useEffect, useState } from "react"
import Cookies from "cookie-cutter";
import { defaultSettings, cookiesKey, cookiesExpires } from "../config";

export const SettingsContext = createContext(defaultSettings);

export const SettingsProvider = ({ children, defaultSettings }) => {
  const [settings, setSettings] = useSettingCookies(defaultSettings);
  const toggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === 'light' ? 'dark' : 'light'
    })
  }
  return <SettingsContext.Provider value={{ ...settings, toggleMode }}>
    {children}
  </SettingsContext.Provider>
}
function useSettingCookies(defaultSettings) {
  const [settings, setSettings] = useState(defaultSettings);
  const onChangeSetting = () => {
    Cookies.set(cookiesKey.themeMode, settings.themeMode, { expires: cookiesExpires });
  }
  useEffect(() => {
    onChangeSetting();
  }, [settings])
  return [settings, setSettings]
}
