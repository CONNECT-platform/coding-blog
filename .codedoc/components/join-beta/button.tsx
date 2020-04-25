import { RendererLike } from '@connectv/html';
import { transport } from '@connectv/sdh/transport';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { ButtonStyle } from '@codedoc/core/components';
import { CodedocTheme } from '@codedoc/core/transport';

import { JoinBetaOverlay } from '.';


export function JoinButton(
  this: ThemedComponentThis<CodedocTheme>,
  _: any, 
  renderer: RendererLike<any, any>
) {
  const classes = this.theme.classes(ButtonStyle);
  return <button class={classes.button}
    onclick={() => renderer.render(<JoinBetaOverlay/>).on(document.body)}>
      Join the Waiting List for Beta
  </button>;
}



export const JoinButton$ = /*#__PURE__*/transport(JoinButton);