
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
  page: {
    title: {
      base: 'coding.blog'
    },
    favicon: '/favicon.ico',
    meta: {
      subject: 'A Blog for Everything Coding',
      description: 'An open-source blog system for coding and coders. No content-marketing, no ads in disguise. Pure quality articles.',
      keywords: [
        'blog',
        'article',
        'software',
        'programming',
        'code',
        'open-source',
        'open source',
        'coding',
        'tech',
        'IT',
        'blogging',
        'tutorials',
        'articles',
        'convenient',
        'beautiful',
        'modern',
      ]
    }
  },
  dest: {
    html: 'dist',
    assets: 'dist',
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
