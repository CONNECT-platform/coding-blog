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
      text: '#757575',
    }
  },
  toc: {
    dark: {
      background: '#162A5D'
    }
  },
  code: {
    light: {
      shadow: '',
    },
    dark: {
      shadow: '',
      background: '#1b1b2f',
    }
  }
});
