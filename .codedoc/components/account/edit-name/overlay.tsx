import { RendererLike, ref, ComponentThis } from '@connectv/html';
import { Loading, Overlay } from '@codedoc/core/components';
import { not } from 'rxmetics';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ActionOverlay } from '../../action-overlay';
import { AccountService } from '../service';


export function EditNameOverlay(this: ComponentThis, _: any, renderer: RendererLike<any, any>) {
  const close = ref<() => void>();
  const name = new BehaviorSubject('');
  const loading = new BehaviorSubject(false);
  const service = AccountService.instance();

  this.track({
    bind() {
      setTimeout(() => {
        if (service.data.value) name.next(service.data.value.name || '');
      }, 10);
    }
  });

  return <ActionOverlay title='Update your Name' close={close} actions={
    <button disabled={loading} onclick={() => {
      loading.next(true);
      service.updateName(name.value)
      .then(() => {
        loading.next(false);
        close.$();
      })
      .catch(() => {
        loading.next(false);
        close.$();
        renderer.render(
          <Overlay>
            <span class="icon-font" style="font-size: 128px; color: #fd5e53">error</span><br/>
            Oops<br/>
            <p style="font-size: 24px">
              Something went wrong. Please try again in a minute or contact us at 
              contact@connect-platform.com.
            </p>
          </Overlay>
        ).on(document.body);
      });
    }}>
      <span hidden={not(loading)}><Loading/></span>
      {loading.pipe(map(v => v ? 'Updating ...' : 'Update Name'))}
    </button>
  }>
    <p>
      We will use this name to refer to you in a friendlier manner on emails. 
      It will NOT be shared by any third-party.
    </p>
    <input _state={name} placeholder="Name" type="text"/>
  </ActionOverlay>
}
