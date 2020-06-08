import { RendererLike, ref, ComponentThis } from '@connectv/html';
import { Loading, Overlay } from '@codedoc/core/components';
import { not, or } from 'rxmetics';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ActionOverlay } from '../../action-overlay';
import { AccountService } from '../service';


const repoRegex = /^(https)(:(\/\/)?)([\w\.@\:/\-~]+)(\/)?$/;

export function BindRepoOverlay(this: ComponentThis, _: any, renderer: RendererLike<any, any>) {
  const close = ref<() => void>();
  const url = new BehaviorSubject('');
  const loading = new BehaviorSubject(false);
  const service = AccountService.instance();
  const valid = url.pipe(map(v => repoRegex.test(v)));

  this.track({
    bind() {
      setTimeout(() => {
        if (service.data.value) url.next(service.data.value.repo || '');
      }, 10);
    }
  });

  return <ActionOverlay title='Bind your Repo' close={close} actions={
    <button disabled={or(loading, not(valid))} onclick={() => {
      loading.next(true);
      service.bindRepo(url.value)
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
            <p style="font-size: 24px" onclick={event => event.stopPropagation()}>
              Something went wrong. Please try again in a minute or contact us at 
              contact@connect-platform.com.
            </p>
          </Overlay>
        ).on(document.body);
      });
    }}>
      <span hidden={not(loading)}><Loading/></span>
      {loading.pipe(map(v => v ? 'Binding ...' : 'Bind Repo'))}
    </button>
  }>
    <p>
      Bind the Git repo of your blog to {service.data.pipe(map(d => d?.domain))}.
      We will clone this repo, build it 
      using <a href="https://codedoc.cc" target="_blank" style="color: white !important">
        <strong>CODEDOC</strong>
      </a> and 
      distribute the generated files to our CDNs for publishing your blog.
    </p>
    <input _state={url} placeholder="Repo URL" type="text"/>
  </ActionOverlay>
}
