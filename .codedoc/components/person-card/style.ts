import { themedStyle } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core/transport';


export const PersonCardStyle = /*#__PURE__*/themedStyle<CodedocTheme>(theme => ({
  card: {
    padding: 16,
    overflow: 'hidden',
  },
  avatar: {
    width: 56,
    height: 56,
    marginRight: 8,
    borderRadius: 96,
  },
  top: {
    display: 'flex',
  },
  toptext: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 10,
    opacity: .5,
  },
  content: {

  },
}));