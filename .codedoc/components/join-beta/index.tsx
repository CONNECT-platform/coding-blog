import { state, map, pack } from '@connectv/core';
import { RendererLike, ref } from '@connectv/html';
import { ThemedComponentThis } from '@connectv/jss-theme';
import Airtable from 'airtable';

import { CodedocTheme } from '@codedoc/core/transport';
import { Overlay, Loading } from '@codedoc/core/components';
import { JoinBetaOverlayStyle } from './style';


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function JoinBetaOverlay(
  this: ThemedComponentThis<CodedocTheme>,
  _: any,
  renderer: RendererLike<any, any>,
) {
  const classes = this.theme.classes(JoinBetaOverlayStyle);
  const holder = ref<HTMLElement>();

  const name = state('');
  const email = state('');
  const valid = state(false);
  const loading = state(false);

  const list = new Airtable({apiKey: 'keyNGgafrsBl5ZvSZ'}).base('app7ZFupWN8qzySOM')('Beta Waiting List');

  pack(name, email).to(map(([name, email]: [string, string]) => {
    return name.length > 0 && email.length > 0 && emailRegex.test(email);
  })).to(valid);

  const close = () => { 
    holder.$.classList.remove('active');
    setTimeout(() => holder.$.remove(), 300);
  };

  this.track({
    bind() {
      setTimeout(() => holder.$.classList.add('active'), 10);
    }
  });

  return <div class={classes.overlay} _ref={holder} onkeydown={event => {
    const key = (event as KeyboardEvent).key;
    if (key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      close();
    }
  }}>
    <div class={classes.content}>
      <div class="top">
        <div class="title">Join Beta Waiting List</div>
        <div class={classes.close} onclick={close}/>
      </div>
      <div>
        <p>
          We will only use this name and email address to reserve
          your place on coding.blog 's beta waiting list and inform
          you of updates regarding the beta program.
        </p>
        <br/>
        <input _state={name} placeholder="Name" type="text"/>
        <input _state={email} placeholder="Email Address" type="email"/>
        <br/>
        <div style="text-align:right">
          <button disabled={pack(valid, loading).to(map(([v,l]: [boolean, boolean]) => !v || l))}
            onclick={() => {
            if (valid.value) {
              loading.value = true;
              list.select({ 
                fields: ["email"],
                filterByFormula: `{email}='${email.value}'`
              }).firstPage().then(res => {
                if (res.length > 0) {
                  loading.value = false;
                  close();
                  renderer.render(
                    <Overlay>
                      <span class="icon-font" style="font-size: 128; color: #feb72b">done_all</span><br/>
                      Already Joined!<br/>
                      <p style="font-size: 24px">
                        You are already in the waiting list for coding.blog's beta.
                      </p>
                    </Overlay>
                  ).on(document.body);
                }
                else {
                  list.create([{
                    fields: {
                      email: email.value,
                      name: name.value
                    }
                  }])
                  .then(() => {
                    loading.value = false;
                    close();
                    renderer.render(
                      <Overlay>
                        <span class="icon-font" style="font-size: 128; color: #75daad">done_all</span><br/>
                        Success!<br/>
                        <p style="font-size: 24px">
                          Thanks for joining coding.blog beta waiting list!
                        </p>
                      </Overlay>
                    ).on(document.body);
                  })
                  .catch(() => {
                    loading.value = false;
                    close();
                    renderer.render(
                      <Overlay>
                        <span class="icon-font" style="font-size: 128; color: #fd5e53">error</span><br/>
                        Oops<br/>
                        <p style="font-size: 24px">
                          Something went wrong. Please try again in a minute or contact us at 
                          contact@connect-platform.com.
                        </p>
                      </Overlay>
                    ).on(document.body);
                  });
                }
              });
            }
          }}>
            <span hidden={loading.to(map((_: boolean) => !_))}>
              <Loading/>
            </span>
            {loading.to(map((_: boolean) => _ ? 'Joining ...' : 'Join Waiting List for Beta'))}
          </button>
        </div>
      </div>
    </div>
  </div>
}