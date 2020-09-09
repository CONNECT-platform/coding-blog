import { StaticRenderer } from '@connectv/sdh';
import register from 'jsdom-global';
import { ConfigOverride } from '@codedoc/core';

const renderer = new StaticRenderer();                   // --> create a static renderer
register();                                              // --> register jdom global so that we can create DOM elements


export function googleAnalytics(gacode: string) {
  return function(): ConfigOverride {
    return {
      page: {
        scripts: [
          <script>{`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', '${gacode}', 'auto');
          ga('send', 'pageview');
          `}</script>,
          <script async src='https://www.google-analytics.com/analytics.js'/>
        ],
      }
    }
  };
}