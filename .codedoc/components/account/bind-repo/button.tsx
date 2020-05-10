import { RendererLike } from '@connectv/html';
import { transport } from '@connectv/sdh/transport';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { ButtonStyle } from '@codedoc/core/components';
import { CodedocTheme } from '@codedoc/core/transport';

import { BindRepoOverlay } from './overlay';


export interface BindRepoButtonOptions {
  icon?: 'true' | 'false'
}


export function BindRepoButton(
  this: ThemedComponentThis<CodedocTheme>,
  options: BindRepoButtonOptions, 
  renderer: RendererLike<any, any>
) {
  const classes = this.theme.classes(ButtonStyle);
  const open = () => renderer.render(<BindRepoOverlay/>).on(document.body);
  if (options.icon === 'true')
    return <button class={`${classes.button} icon icon-font`} onclick={open}>edit</button>;
  else
    return <button class={classes.button} onclick={open}>Bind Repo</button>;
}


export const BindRepoButton$ = /*#__PURE__*/transport(BindRepoButton);