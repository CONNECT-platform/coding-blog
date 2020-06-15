import { themedStyle } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core/transport';


export const PublishStatusStyle = /*#__PURE__*/themedStyle<CodedocTheme>(theme => ({
  container: {
    display: 'flex', '&[hidden]': { display: 'none' },
    alignItems: 'center',
    background: theme.light.border,
    padding: 16,
    marginBottom: 8,
    borderRadius: 3,

    'body.dark-mode-animate &': { transition: 'background .3s', },

    'body.dark &': { background: theme.dark.border, },
    '@media (prefers-color-scheme: dark)': { 'body:not(.dark-mode-animate) &': { background: theme.dark.border } },

    '& code': {
      background: 'none !important',
    }
  },

  image: {
    width: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,

    '&.success': {
      color: '#018383',
      'body.dark-mode-animate &': { transition: 'color .3s', },
      'body.dark &': { color: '#bac964' },
      '@media (prefers-color-scheme: dark)': { 'body:not(.dark-mode-animate) &': { color: '#bac964' } },
    },

    '&.error': {
      color: '#e84a5f'
    }
  },

  small: {
    fontSize: 10,
    opacity: .5
  }
}));