import { RendererLike } from '@connectv/html';
import { transport } from '@connectv/sdh/transport';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { ButtonStyle } from '@codedoc/core/components';
import { CodedocTheme } from '@codedoc/core/transport';

import { AccountService as service } from '../account.service';


export function LogoutButton(
  this: ThemedComponentThis<CodedocTheme>,
  _: any, 
  renderer: RendererLike<any, any>
) {
  const classes = this.theme.classes(ButtonStyle);
  return <button class={classes.button}
    onclick={() => service.instance().logout()}>
      Log Out
  </button>;
}


export const LogoutButton$ = /*#__PURE__*/transport(LogoutButton);