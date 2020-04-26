
import { 
  configuration, 
  DefaultMarkdownCustomComponents
} from '@codedoc/core';

import { theme } from './theme';
import { Big } from './components/big';
import { PersonCard } from './components/person-card';
import { JoinButton$ } from './components/join-beta/button';
import { JoinCreatorButton$ } from './components/join-creator/button';


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
      Big, PersonCard,
      JoinButton: JoinButton$,
      JoinCreatorButton: JoinCreatorButton$,
    }
  },
  misc: {
    github: {
      user: 'CONNECT-platform',
      repo: 'coding-blog',
    }
  },
});
