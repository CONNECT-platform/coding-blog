import { RendererLike, ComponentThis, trackable, ref } from '@connectv/html';
import { transport } from '@connectv/sdh/transport';
import { tap } from 'rxjs/operators';

import { AccountStatusBoundOptions } from './types';
import { AccountService as service } from '../service';


export function ACSBControl(
  this: ComponentThis,
  options: AccountStatusBoundOptions, 
  renderer: RendererLike<any, any>
) {
  const _ref = ref<HTMLElement>();
  this.track(trackable(service.instance().status.pipe(
    tap(status => {
      const parent = _ref.$.parentElement as HTMLElement;
      if (status === options.status) parent.hidden = false;
      else parent.hidden = true;
    })
  )));
  return <div _ref={_ref}/>;
}


export const ACSBControl$ = /*#__PURE__*/transport(ACSBControl);