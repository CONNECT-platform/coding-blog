import { getRenderer } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/runner/work/coding-blog/coding-blog/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { CollapseControl } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';
import { ToCToggle } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { JoinCreatorButton } from '/home/runner/work/coding-blog/coding-blog/.codedoc/components/join-creator/button.tsx';
import { ToCPrevNext } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { JoinButton } from '/home/runner/work/coding-blog/coding-blog/.codedoc/components/join-beta/button.tsx';
import { ACSBControl } from '/home/runner/work/coding-blog/coding-blog/.codedoc/components/account/status-bound/control.tsx';
import { AccountProp } from '/home/runner/work/coding-blog/coding-blog/.codedoc/components/account/account-prop/inline.tsx';
import { AccountPropCode } from '/home/runner/work/coding-blog/coding-blog/.codedoc/components/account/account-prop/code.tsx';
import { EditNameButton } from '/home/runner/work/coding-blog/coding-blog/.codedoc/components/account/edit-name/button.tsx';
import { LogoutButton } from '/home/runner/work/coding-blog/coding-blog/.codedoc/components/account/logout/index.tsx';
import { LoginButton } from '/home/runner/work/coding-blog/coding-blog/.codedoc/components/account/login/button.tsx';
import { ACPBControl } from '/home/runner/work/coding-blog/coding-blog/.codedoc/components/account/prop-bound/control.tsx';
import { BindRepoButton } from '/home/runner/work/coding-blog/coding-blog/.codedoc/components/account/bind-repo/button.tsx';
import { PublishStatus } from '/home/runner/work/coding-blog/coding-blog/.codedoc/components/account/publish-status/index.tsx';
import { RefreshPublishWebhookButton } from '/home/runner/work/coding-blog/coding-blog/.codedoc/components/account/publish-blog/refresh-button.tsx';
import { PublishButton } from '/home/runner/work/coding-blog/coding-blog/.codedoc/components/account/publish-blog/button.tsx';
import { TabSelector } from '/home/runner/work/coding-blog/coding-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';

const components = {
  'r+Jv/VS/YauITdU0M0jN1Q==': CollapseControl,
  'krgrG9oFN9VQUm9kMirw5Q==': ToCToggle,
  'rt07Ne+r5k791oQZALhn6g==': DarkModeSwitch,
  '5C7mlfiypfDBeBwm8QT42g==': ConfigTransport,
  'lMESGbHzhfX6M8dUvLqFOQ==': JoinCreatorButton,
  'dPH0+SmZ7R38b/oBW5P5Rw==': ToCPrevNext,
  'vnuJLwoGViEp/Odb1ab7Ow==': JoinButton,
  'rAwarKynpy/O96Cwe2ABsw==': ACSBControl,
  '1Jf+OzRlMLYJPPZCWaMIDw==': AccountProp,
  'PR4C5z8XCIWqC0wh4L8big==': AccountPropCode,
  'shWTIDfMQXEiFAVtcMSW6Q==': EditNameButton,
  '2iDZbWXSp9mVHyg4ZHFpxg==': LogoutButton,
  '2UJH07mrL6zqL5jrlN00iA==': LoginButton,
  'iuBoj8gqUJWoao5Rhv6Z5A==': ACPBControl,
  'kWYPxjjS6eHniJ5+rq7lbQ==': BindRepoButton,
  '8ArGoF0V90w0VfBFfihB3Q==': PublishStatus,
  'pT/+mkb6LyaiJVrBv/2nQg==': RefreshPublishWebhookButton,
  'zJTkEHU8i5aA8SWu2KQczA==': PublishButton,
  '35QFbN70LTVyd/ipvfqjCQ==': TabSelector
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
