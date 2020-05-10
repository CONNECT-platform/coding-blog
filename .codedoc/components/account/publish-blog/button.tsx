import { RendererLike } from '@connectv/html';
import { transport } from '@connectv/sdh/transport';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { ButtonStyle } from '@codedoc/core/components';
import { CodedocTheme } from '@codedoc/core/transport';

import { PublishOverlay } from './overlay';


export function PublishButton(
  this: ThemedComponentThis<CodedocTheme>,
  _: any, 
  renderer: RendererLike<any, any>
) {
  const classes = this.theme.classes(ButtonStyle);

  return <button class={classes.button}
    onclick={() => renderer.render(<PublishOverlay/>).on(document.body)}>
    Publish
  </button>;
}


export const PublishButton$ = /*#__PURE__*/transport(PublishButton);