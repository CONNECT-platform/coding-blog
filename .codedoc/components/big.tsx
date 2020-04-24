import { ThemedComponentThis, themedStyle } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core';


export const BigStyle = themedStyle<CodedocTheme>(theme => ({
  big: {
    '& *': {
      fontSize: 24,
    },
  }
}));

export function Big(
  this: ThemedComponentThis<CodedocTheme>,
  _: any, 
  renderer: any,
  content: any
) {
  const classes = this.theme.classes(BigStyle);
  return <div class={classes.big}>{content}</div>
}