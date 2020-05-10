import { RendererLike } from '@connectv/html';
import { transport } from '@connectv/sdh/transport';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { ButtonStyle } from '@codedoc/core/components';
import { CodedocTheme } from '@codedoc/core/transport';

import { RefreshPWOverlay } from './refresh-overlay';


export function RefreshPublishWebhookButton(
  this: ThemedComponentThis<CodedocTheme>,
  _: any, 
  renderer: RendererLike<any, any>
) {
  const classes = this.theme.classes(ButtonStyle);
  return <button class={`${classes.button} icon icon-font`}
    onclick={() => renderer.render(<RefreshPWOverlay/>).on(document.body)}>
      refresh
  </button>;
}


export const RefreshPublishWebhookButton$ = /*#__PURE__*/transport(RefreshPublishWebhookButton);