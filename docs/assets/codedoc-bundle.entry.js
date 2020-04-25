import { getRenderer } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { JoinButton } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/components/join-beta/button.tsx';
import { ToCToggle } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/eugeneghanizadeh/Documents/projects/connect/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';

const components = {
  '9CkyEtMypIrJ2qJioHYW1w==': JoinButton,
  'rPglIEEYZYKWUnckwk5vUQ==': ToCToggle,
  'Cu+d3UWVY04iUTKlEwuYjQ==': DarkModeSwitch,
  '6bXLvEFrI86RM1mrMs4nDQ==': ConfigTransport
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
