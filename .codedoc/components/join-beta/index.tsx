import { state, map, pack } from '@connectv/core';
import { RendererLike, ref } from '@connectv/html';
import { Overlay, Loading } from '@codedoc/core/components';

import { ActionOverlay } from '../action-overlay';


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function JoinBetaOverlay(_: any, renderer: RendererLike<any, any>) {
  const name = state('');
  const email = state('');
  const valid = state(false);
  const loading = state(false);

  pack(name, email).to(map(([name, email]: [string, string]) => {
    return name.length > 0 && email.length > 0 && emailRegex.test(email);
  })).to(valid);

  const close = ref<() => void>();

  return <ActionOverlay close={close} title='Join Beta Waiting List' actions={
  <button disabled={pack(valid, loading).to(map(([v,l]: [boolean, boolean]) => !v || l))}
    onclick={() => {
    if (valid.value) {
      loading.value = true;
      fetch(`https://tinygraykoala47yq.connect-platform.com/beta-waiting-list`
          + `?email=${encodeURIComponent(email.value)}`
          + `&name=${encodeURIComponent(name.value)}`
      ).then(() => {
        loading.value = false;
        close.$();
        renderer.render(
          <Overlay>
            <span class="icon-font" style="font-size: 128px; color: #75daad">done_all</span><br/>
            Success!<br/>
            <p style="font-size: 24px">
              Thanks for joining coding.blog beta waiting list!
            </p>
          </Overlay>
        ).on(document.body);
      })
      .catch(() => {
        loading.value = false;
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
    }
  }}>
    <span hidden={loading.to(map((_: boolean) => !_))}>
      <Loading/>
    </span>
    {loading.to(map((_: boolean) => _ ? 'Joining ...' : 'Join the Waiting List for Beta'))}
  </button>}><p>
      We will only use this name and email address to reserve
      your place on coding.blog 's beta waiting list and inform
      you of updates regarding the beta program.
    </p>
    <br/>
    <input _state={name} placeholder="Name" type="text"/>
    <input _state={email} placeholder="Email Address" type="email"/>
  </ActionOverlay>
}