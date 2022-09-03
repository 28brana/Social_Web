import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import breakpoints from './breakpoints';
export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(() => ({
    breakpoints,
  }), [])
  const theme = createTheme(themeOptions)
  return (
    <MUIThemeProvider theme={theme}>
      {children}
    </MUIThemeProvider>
  )
}
