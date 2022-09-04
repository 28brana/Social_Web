import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(deg, color1, color2) {
  return `linear-gradient(${deg}, ${color1}, ${color2})`;
}

// SETUP COLORS
const PRIMARY = {
  lighter: '#FFFFFF',
  light: '#666666',
  main: '#4d4d4d',
  dark: '#717171',
  darker: '#000000',
};
const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#FF0066',
  main: '#9900FF',
  dark: '#e2005a',
  darker: '#c6004f',
};
const INFO = {
  lighter: '#506fff',
  light: '#3D61FF',
  main: '#1E47FF',
  dark: '#1a3fe2',
  darker: '#1737c6',
};
const SUCCESS = {
  lighter: '#00bd07',
  light: '#19a31e',
  main: '#008A05',
  dark: '#008a05',
  darker: '#005703',
};
const WARNING = {
  lighter: '#fd2d11',
  light: '#f2341b',
  main: '#D91B02',
  dark: '#ce230d',
  darker: '#a61502',
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
};

const NEUTRAL = {
  darker: '#111111',
  dark: '#8F8F8F',
  disabled: '#dddddd',
  lighter: '#F7F7F7',
  light: '#ffffff',
};

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#B0B0B0',
  500: '#919EAB',
  600: '#637381',
  700: '#4F4F4F',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const GRADIENTS = {
  primaryDark: createGradient('96.77deg', `${PRIMARY.lighter} 0%`, `${PRIMARY.light} 99.21%`),
  primaryLight: createGradient('96.49deg', `${PRIMARY.dark} -0.04%`, `${PRIMARY.darker} 78.6%`),
  secondary: createGradient('132.15deg', `${SECONDARY.main} 2.73%`, `${SECONDARY.light} 100%`),
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: '#fff' },
  grey: GREY,
  neutral: NEUTRAL,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
  skeleton: {
    light: '#ffffff1c',
    lighter: '#9491911c',
    dark: '#acaaaa2e',
    darker: 'hsla(0,1%,74%,0.18)',
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: { primary: PRIMARY.darker, secondary: INFO.main, disabled: GREY[400] },
    background: {
      secondary: SECONDARY.main,
      paper: NEUTRAL.lighter,
      default: PRIMARY.lighter,
      neutral: NEUTRAL.lighter,
      skeleton: { primary: COMMON.skeleton.light, secondary: COMMON.skeleton.lighter },
    },
    action: { active: GREY[600], ...COMMON.action },
    border: '#EBEBEB',
    typography: {
      grey: '#717171',
      blackAndWhite: '#000000',
      darkGrey: '#222222',
      lightGrey: '#B0B0B0',
      green: '#008A05',
      h1: '#222222',
      h2: '#222222',
      h3: '#222222',
      h4: '#222222',
      h5: '#222222',
      h6: '#717171',
      body1: '#222222',
      body2: '#717171',
      subtitle1: '#717171',
      subtitle2: '#717171',
    },
    icon: {
      primary: '#000000',
      secondary: '#FFFFFF',
      neutral: '#717171',
    },
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    text: { primary: PRIMARY.lighter, secondary: INFO.light, disabled: GREY[700] },
    background: {
      secondary: SECONDARY.main,
      paper: '#292929',
      default: PRIMARY.darker,
      neutral: NEUTRAL.darker,
      skeleton: { primary: COMMON.skeleton.dark, secondary: COMMON.skeleton.darker },
    },
    action: { active: GREY[500], ...COMMON.action },
    border: '#242424',
    typography: {
      grey: NEUTRAL.dark,
      blackAndWhite: '#ffffff',
      darkGrey: '#DEDEDE',
      lightGrey: '#4F4F4F',
      green: '#008A05',
      h1: '#DEDEDE',
      h2: '#DEDEDE',
      h3: '#DEDEDE',
      h4: '#DEDEDE',
      h5: '#DEDEDE',
      h6: NEUTRAL.dark,
      body1: '#DEDEDE',
      body2: NEUTRAL.dark,
      subtitle1: NEUTRAL.dark,
      subtitle2: NEUTRAL.dark,
    },
    icon: {
      primary: '#FFFFFF',
      secondary: '#000000',
      neutral: '#717171',
    },
  },
};

export default palette;
