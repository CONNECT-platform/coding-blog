import { themedStyle } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core';


export const ArticlePreviewStyle = themedStyle<CodedocTheme>(theme => ({
  title: {
    color: theme.light.text,
    fontSize: 24,
    textDecoration: 'none !important',
    'body.dark &': { color: theme.dark.text },
    '@media (prefers-color-scheme: dark)': {
      'body:not(.dark-mode-animate) &': { color: theme.dark.text }
    }
  },
  summary: {
    '&>a, & p>a': {
      color: theme.light.text,
      textDecoration: 'none !important',
      'body.dark &': { color: theme.dark.text },
      '@media (prefers-color-scheme: dark)': {
        'body:not(.dark-mode-animate) &': { color: theme.dark.text }
      }
    }
  },
  image: {
    display: 'block',
    width: '100%',
    height: 256,
    borderRadius: 4,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginBottom: 20,
  },
  card: {
    display: 'block',
    '& hr': {
      margin: '32px 64px',
    }
  },
  inside: {
    '$card.row &, $card.row-reverse &': {
      display: 'flex',
      '& $image': {
        width: 256,
        flexShrink: 0,
      }
    },
    '$card.row &': {
      flexDirection: 'row',
      '& $image': {
        marginRight: 24,
        marginBottom: 0,
      }
    },
    '$card.row-reverse &': {
      flexDirection: 'row-reverse',
      '& $image': {
        marginLeft: 24,
        marginBottom: 0,
      }
    },
    '@media (max-width: 768px)': {
      '$card.row &, $card.row-reverse &': {
        display: 'block',
        '& $image': {
          width: 'auto !important',
          marginRight: '0 !important',
          marginLeft: '0 !important',
          marginBottom: '20px !important',
        },
      }
    }
  },
  row: {
    display: 'flex',
    flexDirection: 'row',

    '& $card': {
      flexGrow: 1,
      width: '100%',

      '&:first-child': {
        marginRight: 32
      }
    },

    '@media (max-width: 768px)': {
      display: 'block',
      '& $card:first-child': {
        marginRight: 0,
        marginBottom: 64,
      }
    }
  }
}));