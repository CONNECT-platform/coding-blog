import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    primary: '#363062',
    background: '#f5f5f5',
    code: '#363062',
  },
  dark: {
    primary: '#9399ff',
    background: '#142850',
    code: '#9399ff',
  },
  quote: {
    dark: {
      background: '#142850',
      border: '#27496d',
    },
    light: {
      background: '#f5f5f5',
      text: '#9e9e9e',
    }
  },
  toc: {
    dark: {
      background: '#162A5D'
    }
  }
});
