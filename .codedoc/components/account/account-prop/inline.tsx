import { RendererLike } from '@connectv/html';
import { transport } from '@connectv/sdh/transport';
import { map } from 'rxjs/operators';

import { AccountService as service } from '../service';
import { AccountPropOptions } from './types';


export function AccountProp(options: AccountPropOptions, renderer: RendererLike<any, any>) {
  return <code>{service.instance().data.pipe(map(data => {
    if (!data) return options.empty || '';
    else if (options.fallback) return data[options.prop] || data[options.fallback] || options.empty || '';
    else return data[options.prop] || options.empty || '';
  }))}</code>
}


export const AccountProp$ = /*#__PURE__*/transport(AccountProp);
