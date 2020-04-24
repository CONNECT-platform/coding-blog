import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    primary: '#363062',
    background: '#f5f5f5',
    code: '#363062',
  },
  dark: {
    primary: '#f4eeff',
    background: '#111111',
    code: '#f4eeff',
  },
  quote: {
    dark: {
      background: '#111111',
    },
    light: {
      background: '#f5f5f5',
      text: '#9e9e9e',
    }
  }
});
