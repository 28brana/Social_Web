import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import useSettings from '../hooks/useSetting';
import breakpoints from './breakpoints';
import palette from './palette';
export default function ThemeProvider({ children }) {
  const { themeMode } = useSettings();
  const isLight = themeMode === 'light';
  const themeOptions = useMemo(() => ({
    palette: isLight ? palette.light : palette.dark,
    breakpoints,
  }), [isLight])
  const theme = createTheme(themeOptions)
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}
