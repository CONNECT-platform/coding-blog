import { RendererLike } from '@connectv/html';
import { transport } from '@connectv/sdh/transport';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { ButtonStyle } from '@codedoc/core/components';
import { CodedocTheme } from '@codedoc/core/transport';

import { EditNameOverlay } from './overlay';


export function EditNameButton(
  this: ThemedComponentThis<CodedocTheme>,
  _: any, 
  renderer: RendererLike<any, any>
) {
  const classes = this.theme.classes(ButtonStyle);
  return <button class={`${classes.button} icon icon-font`}
    onclick={() => renderer.render(<EditNameOverlay/>).on(document.body)}>
      edit
  </button>;
}


export const EditNameButton$ = /*#__PURE__*/transport(EditNameButton);