import { themedStyle } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core/transport';


export const JoinBetaOverlayStyle = /*#__PURE__*/themedStyle<CodedocTheme>(theme => ({
  overlay: {
    zIndex: 1000,
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0, left: 0, bottom: 0, right: 0,
    background: 'rgba(64, 64, 64, .65)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    opacity: 0,
    transition: 'opacity .15s',
    '&.active': {opacity: 1},
  },

  content: {
    width: 'calc(50vw - 32px)',
    height: 'calc(75vh - 32px)',
    overflow: 'auto',
    padding: 16,

    '@media screen and (max-width: 1200px)': {
      width: 'calc(100vw - 64px)',
      height: 'calc(100vh - 64px)',
      padding: 32,
    },

    '& .top': {
      display: 'flex',
      alignItems: 'top',

      '& .title': {
        flexGrow: 1,
        fontSize: 32,
      }
    },

    color: '#e0e0e0',

    '& input': {
      background: 'rgba(64, 64, 64, .15)',
      border: '1px solid #ffffff3a',
      borderRadius: 8,
      padding: 8,
      margin: '8px 0',
      outline: 'none',
      fontSize: 24,
      display: 'block',
      width: '100%',
      flexGrow: 1,
      color: 'white',

      '&::placeholder': {
        color: 'rgba(255, 255, 255, .25)',
      }
    },

    '& button': {
      background: 'white',
      color: 'black',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      padding: 8,
      borderRadius: 3,
      cursor: 'pointer',
      outline: 'none',
      border: '2px solid white',
      transition: 'color .15s, background .15s, border-color .15s',
      '&>span': {
        marginRight: 16,
      },

      '&:hover': {
        color: 'white',
        background: 'transparent',
      },

      '&[disabled]': {
        background: 'rgba(64, 64, 64, .3)',
        borderColor: 'transparent',
        color: 'white',
        cursor: 'initial',
      },
    },
  },

  close: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    opacity: .25,
    width: 64,
    height: 64,
    borderRadius: 3,
    transition: 'opacity .15s',
    '&:hover': {opacity: 1},

    '&:before, &:after': {
      content: '" "',
      background: 'white',
      borderRadius: 2,
      width: 48,
      height: 2,
      position: 'absolute',
      transformOrigin: 'center',
    },
    '&:before': { transform: 'rotate(45deg)'},
    '&:after': { transform: 'rotate(-45deg)'},
  },
}));
