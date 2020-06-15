import { RendererLike, ComponentThis, trackable, ref } from '@connectv/html';
import { transport } from '@connectv/sdh/transport';
import { tap } from 'rxjs/operators';

import { AccountPropBoundOptions } from './types';
import { AccountService as service } from '../account.service';


export function ACPBControl(
  this: ComponentThis,
  options: AccountPropBoundOptions, 
  renderer: RendererLike<any, any>
) {
  const _ref = ref<HTMLElement>();
  this.track(trackable(service.instance().data.pipe(
    tap(data => {
      const parent = _ref.$.parentElement as HTMLElement;
      if (data) {
        if (options.unset === 'true') {
          if (!data[options.prop]) parent.hidden = false;
          else parent.hidden = true;
        } 
        else {
          if (!!data[options.prop]) parent.hidden = false;
          else parent.hidden = true;
        }
      } 
      else parent.hidden = true;
    })
  )));
  return <div _ref={_ref}/>;
}


export const ACPBControl$ = /*#__PURE__*/transport(ACPBControl);