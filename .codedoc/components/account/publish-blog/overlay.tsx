import { RendererLike, ref } from '@connectv/html';
import { Loading, Overlay } from '@codedoc/core/components';
import { not } from 'rxmetics';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ActionOverlay } from '../../action-overlay';
import { AccountPropCode } from '../account-prop/code';
import { AccountProp } from '../account-prop/inline';
import { PublishService } from '../publish.service';


export function PublishOverlay(_: any, renderer: RendererLike<any, any>) {
  const close = ref<() => void>();
  const loading = new BehaviorSubject(false);
  const service = PublishService.instance();

  return <ActionOverlay title='Confirm Publish' close={close} 
  actions={
    <fragment>
      <button onclick={() => close.$()}>Cancel</button>
      <button disabled={loading} onclick={() => {
        loading.next(true);
        service.publishBlog()
        .then(() => {
          loading.next(false);
          close.$();
          renderer.render(
            <Overlay>
              <span class="icon-font outline" style="font-size: 128px">emoji_food_beverage</span><br/>
              Publish in Progress<br/>
              <p style="font-size: 18px">
                We have started the process of building and publishing your blog. The newest version of
                your blog will soon be available on <AccountProp prop='domain'/>.
                Grab a cup of coffee and/or tea, we will keep you updated on the process via Email.
              </p>
            </Overlay>
          ).on(document.body);
        })
        .catch(() => {
          loading.next(false);
          close.$();
          renderer.render(
            <Overlay>
              <span class="icon-font" style="font-size: 128px; color: #fd5e53">error</span><br/>
              Oops<br/>
              <p style="font-size: 24px" onclick={event => event.stopPropagation()}>
                Something went wrong. Please try again in a minute or contact us at 
                contact@connect-platform.com.
              </p>
            </Overlay>
          ).on(document.body);
        });
      }}>
        <span hidden={not(loading)}><Loading/></span>
        <span style="margin: 0 16px">{loading.pipe(map(v => v ? 'Publishing ...' : 'Yes, Publish'))}</span>
      </button>
    </fragment>
  }
  >
    <p>
      Are you sure you want to publish your blog? The following repo will be cloned:
      <AccountPropCode prop='repo'/>
      and the latest content on its <i>master</i> branch will be published to
      <AccountPropCode prop='domain'/>
    </p>
  </ActionOverlay>
}
