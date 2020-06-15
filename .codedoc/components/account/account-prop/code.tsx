import { Renderer, styled } from '@connectv/html';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { CodeStyle } from '@codedoc/core/components';
import { CodedocTheme } from '@codedoc/core/transport';
import { transport } from '@connectv/sdh/transport';
import { map } from 'rxjs/operators';

import { AccountService as service } from '../account.service';
import { AccountPropOptions } from './types';


export function AccountPropCode(
  this: ThemedComponentThis<CodedocTheme>,
  options: AccountPropOptions, 
  renderer: Renderer
) {
  renderer = renderer.plug(this.theme.styled(CodeStyle));
  const classes = this.theme.classes(CodeStyle);
  const prop = service.instance().data.pipe(map(data => {
    if (!data) return options.empty || '';
    else if (options.fallback) return data[options.prop] || data[options.fallback] || options.empty || '';
    else return data[options.prop] || options.empty || '';
  }));

  return <pre>
    <code>
      <div class={classes.line} data-content={prop}>
        <span class={`${classes.lineCounter} prim`}>1</span>
        {prop}
      </div>
    </code>
  </pre>
}


export const AccountPropCode$ = /*#__PURE__*/transport(AccountPropCode);
