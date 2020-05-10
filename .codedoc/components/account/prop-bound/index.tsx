import { RendererLike } from '@connectv/html';
import { AccountPropBoundOptions } from './types';

import { ACPBControl$ } from './control';


export function AccountPropBound(
  options: AccountPropBoundOptions,
  renderer: RendererLike<any, any>,
  content: any
) {
  return <div hidden>
    <ACPBControl$ prop={options.prop} unset={options.unset}/>
    {content}
  </div>
}
