import { RendererLike, ref } from '@connectv/html';
import { Loading, Overlay } from '@codedoc/core/components';
import { not } from 'rxmetics';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ActionOverlay } from '../../action-overlay';
import { AccountService } from '../account.service';


export function RefreshPWOverlay(_: any, renderer: RendererLike<any, any>) {
  const close = ref<() => void>();
  const loading = new BehaviorSubject(false);
  const service = AccountService.instance();

  return <ActionOverlay title='Confirm Refresh' close={close} 
  actions={
    <fragment>
      <button onclick={() => close.$()}>Cancel</button>
      <button disabled={loading} onclick={() => {
        loading.next(true);
        service.refreshPublishUrl()
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
        {loading.pipe(map(v => v ? 'Refreshing ...' : 'Refresh Publish Webhook'))}
      </button>
    </fragment>
  }
  >
    <p>
      Are you sure you want to refresh your publish webhook? Your current webhook will no longer work,
      which means any services that call upon it will also fail to publish your blog and recieve an error
      instead.
    </p>
  </ActionOverlay>
}
