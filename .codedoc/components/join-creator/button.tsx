import { RendererLike } from '@connectv/html';
import { transport } from '@connectv/sdh/transport';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { ButtonStyle } from '@codedoc/core/components';
import { CodedocTheme } from '@codedoc/core/transport';

import { JoinCreatorOverlay } from '.';


export function JoinCreatorButton(
  this: ThemedComponentThis<CodedocTheme>,
  _: any, 
  renderer: RendererLike<any, any>
) {
  const classes = this.theme.classes(ButtonStyle);
  return <button class={classes.button}
    onclick={() => renderer.render(<JoinCreatorOverlay/>).on(document.body)}>
      Join the Prospective Creators List
  </button>;
}



export const JoinCreatorButton$ = /*#__PURE__*/transport(JoinCreatorButton);