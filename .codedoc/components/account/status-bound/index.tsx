import { RendererLike } from '@connectv/html';
import { AccountStatusBoundOptions } from './types';

import { ACSBControl$ } from './control';


export function AccountStatusBound(
  options: AccountStatusBoundOptions,
  renderer: RendererLike<any, any>,
  content: any
) {
  return <div hidden>
    <ACSBControl$ status={options.status}/>
    {content}
  </div>
}
