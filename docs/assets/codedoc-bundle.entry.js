import { getRenderer } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { ToCPrevNext } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { ToCToggle } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { JoinCreatorButton } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/components/join-creator/button.tsx';
import { JoinButton } from '/Users/mustaphabenchaaben/Code/codedoc/coding-blog/.codedoc/components/join-beta/button.tsx';

const components = {
  'LwMmQh4ocAvMl3KEQwIwbA==': ToCPrevNext,
  'Y1n70jAnr09ZOarvFk4iaQ==': ToCToggle,
  '9YlkltvP6FYr6bYgtAh4Ew==': DarkModeSwitch,
  'oaFrqfOoxxRMwluwPaYCzw==': ConfigTransport,
  'mDpGZd+WvWCgVvTcZCyvEg==': JoinCreatorButton,
  '3bgFieq9H5R/a1mQgtxfLA==': JoinButton
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
