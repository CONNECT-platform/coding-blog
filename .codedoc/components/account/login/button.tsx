import { RendererLike } from '@connectv/html';
import { transport } from '@connectv/sdh/transport';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { ButtonStyle } from '@codedoc/core/components';
import { CodedocTheme } from '@codedoc/core/transport';

import { LoginOverlay } from './overlay';


export function LoginButton(
  this: ThemedComponentThis<CodedocTheme>,
  _: any, 
  renderer: RendererLike<any, any>
) {
  const classes = this.theme.classes(ButtonStyle);

  return <button class={classes.button}
    onclick={() => renderer.render(<LoginOverlay/>).on(document.body)}>
    Login
  </button>;
}


export const LoginButton$ = /*#__PURE__*/transport(LoginButton);