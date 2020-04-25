
import { 
  configuration, 
  DefaultMarkdownCustomComponents
} from '@codedoc/core';

import { theme } from './theme';
import { Big } from './components/big';
import { JoinButton$ } from './components/join-beta/button';


export const config = /*#__PURE__*/configuration({
  theme,
  dest: {
    namespace: '/coding-blog'
  },
  page: {
    title: {
      base: 'coding.blog'
    }
  },
  markdown: {
    customComponents: {
      ...DefaultMarkdownCustomComponents,
      Big, JoinButton: JoinButton$,
    }
  },
  misc: {
    github: {
      user: 'CONNECT-platform',
      repo: 'coding-blog',
    }
  },
});
