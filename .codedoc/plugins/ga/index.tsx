import { StaticRenderer } from '@connectv/sdh';
import register from 'jsdom-global';
import { ConfigOverride } from '@codedoc/core';

const renderer = new StaticRenderer();
register();

// Documentation
// Coppied from https://github.com/bender2k14/tyson-williams-blog/blob/2501a6e55ebbf0e559d91ac1494ef2b412739c7d/.codedoc/components/GoogleAnalytics/plugin.tsx#L28
// Thumbs up to @bender2k14
// Use gtag.js
//   not analytics.js https://developers.google.com/analytics/devguides/collection/upgrade
//   not ga.js        https://developers.google.com/analytics/devguides/collection/gajs/asyncMigrationExamples#basic-page-tracking
// Default gtag code
//   https://developers.google.com/analytics/devguides/collection/gtagjs#install_the_global_site_tag
// Send manual page views for single page applications, which codedoc creates
//   https://developers.google.com/analytics/devguides/collection/gtagjs/pages#manual_pageviews
// Default page view arguments
//   https://developers.google.com/analytics/devguides/collection/gtagjs/pages#default_behavior
// Test with...
//     https://support.google.com/analytics/answer/1008080#verify:~:text=Verify%20that%20your%20global%20site%20tag%20is%20working,-To
//   Real-time view in Google Analytics
//   Google's Google's Tag Assistant extension for Google Chrome
//     https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk
// Example use of Google's Tag Assistant
//   https://www.youtube.com/watch?v=EkNsaBDT8Cc
// But Google Tag Assistant contains some bugs for single page applications
//   https://www.analyticsmania.com/post/multiple-installations-of-google-tag-manager-detected/

export function googleAnalytics(trackingId: string) {
  let gtagUrl = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
  let functionName = 'sendPageViewToGoogle'
  let functionBody =
    `gtag('js', new Date());` +
    `gtag('config', '${trackingId}');`
  let localCode =
    'function gtag(){dataLayer.push(arguments);}' +
    `function ${functionName}(){${functionBody}}` +
    'window.dataLayer = window.dataLayer || [];' +
    `window.addEventListener("navigation", ${functionName});` +
    `${functionName}();`
  let anonymousFunction =
    `(function(){${localCode}})();`
  return function(): ConfigOverride {
    return {
      page: {
        scripts: [
          <script async src={gtagUrl}></script>,
          <script>{anonymousFunction}</script>
        ]
      }
    }
  };
}