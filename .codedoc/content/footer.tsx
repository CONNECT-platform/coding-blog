import { CodedocConfig, CodedocTheme } from '@codedoc/core';
import { Footer as _Footer } from '@codedoc/core/components';
import { themedStyle, ThemedComponentThis } from '@connectv/jss-theme';


const style = themedStyle<CodedocTheme>(() => ({
  imgLink: {
    position: 'relative',
    width: 24,
    height: 24,
    opacity: .25,
    transition: 'opacity .1s !important',
    '&:hover': { opacity: 1, },

    '& img': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      transition: 'opacity .3s',

      '&.light': {
        'body.dark &': {
          opacity: 0,
        },
    
        '@media (prefers-color-scheme: dark)': {
          'body:not(.dark-mode-animate) &': {
            opacity: 0
          }
        },
      },

      '&.dark': {
        opacity: 0,
        'body.dark &': {
          opacity: 1,
        },
    
        '@media (prefers-color-scheme: dark)': {
          'body:not(.dark-mode-animate) &': {
            opacity: 1
          }
        },
      },
    }
  }
}));


export function Footer(this: ThemedComponentThis, config: CodedocConfig, renderer: any) {
  const classes = this.theme.classes(style);
  return <_Footer>
    <a href="https://twitter.com/coding_blog" target="_blank" class={classes.imgLink}>
      <img src="/img/social/twitter-light.svg" class="light"/>
      <img src="/img/social/twitter-dark.svg" class="dark"/>
    </a>
    <hr/>
    <a href="https://github.com/CONNECT-platform/coding-blog" target="_blank" class={classes.imgLink}>
      <img src="/img/social/github-light.svg" class="light"/>
      <img src="/img/social/github-dark.svg" class="dark"/>
    </a>
    <hr/>
    <a href="https://www.linkedin.com/company/coding-blog/" target="_blank" class={classes.imgLink}>
    <img src="/img/social/linkedin-light.svg" class="light"/>
      <img src="/img/social/linkedin-dark.svg" class="dark"/>
    </a>
  </_Footer>;
}
