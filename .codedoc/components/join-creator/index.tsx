import { state, map, pack, sink, pipe } from '@connectv/core';
import { debounceTime } from 'rxjs/operators';
import { RendererLike, ref, ComponentThis } from '@connectv/html';
import { Overlay, Loading } from '@codedoc/core/components';

import { ActionOverlay } from '../action-overlay';
import { isAvailable } from './is-available';
import { AccountService } from '../account/service';


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const domainRegex = /^(\w+)\.coding\.blog$/;
const bannedDomains = [
  /^ww[0-9]*\.coding\.blog$/,
  /^www[0-9]*\.coding\.blog$/,
  /^dns[0-9]*\.coding\.blog$/,
  /^connect[0-9]*\.coding\.blog$/,
  /^accounts?\.coding\.blog$/,
  /^support\.coding\.blog$/,
  /^admin(istrator)?\.coding\.blog$/,
];

export function JoinCreatorOverlay(this: ComponentThis, _: any, renderer: RendererLike<any, any>) {
  const close = ref<() => void>();
  const domainInput = ref<HTMLInputElement>();

  const domain = state('your.coding.blog');
  const email = state('');
  const valid = state(false);
  const loading = state(false);
  const checking = state(false);
  const available = state(false);

  pack(available, email).to(map(([available, email]: [boolean, string]) => {
    return emailRegex.test(email) && available;
  })).to(valid);

  const postfix = domain.to(sink(() => {
    const match = /^(.+)?\.coding\.blog(.+)?$/.exec(domain.value) || [];
    const not = /[^\w|\-]/
    const name = (match[1] || '').toLowerCase().split(not).join('') + 
                 (match[2] || '').toLowerCase().split(not).join('');
    domain.value = name + '.coding.blog';
    if ((domainInput.$.selectionStart || 0) > name.length || (domainInput.$.selectionEnd || 0) > name.length)
      domainInput.$.setSelectionRange(name.length, name.length);
  }));

  domain
  .to(sink(() => available.value = false))
  .to(sink(() => checking.value = true))
  .to(pipe(debounceTime(1000)))
  .to(map((domain: string, done) => isAvailable(domain).then(done)))
  .to(sink(() => checking.value = false))
  .to(map((x: boolean) => x
      && domainRegex.test(domain.value) 
      && bannedDomains.every(d => !d.test(domain.value))
  ))
  .to(available);

  this.track({
    bind() {
      setTimeout(() => {
        if (AccountService.instance().data.value) {
          email.value = AccountService.instance().data.value?.email || '';
        }
      }, 10);
    },

    clear() {
      postfix.clear();
    }
  });

  return <ActionOverlay title='Join the Prospective Creators List' close={close} actions={
    <button disabled={pack(valid, loading).to(map(([v,l]: [boolean, boolean]) => !v || l))}
    onclick={() => {
    if (valid.value) {
      loading.value = true;
      fetch(`https://tinygraykoala47yq.connect-platform.com/prospective-creator-list`
            + `?domain=${encodeURIComponent(domain.value.toLowerCase())}`
            + `&email=${encodeURIComponent(email.value)}`
      ).then(() => {
        loading.value = false;
        close.$();
        renderer.render(
          <Overlay>
            <span class="icon-font" style="font-size: 128px; color: #75daad">done_all</span><br/>
            Success!<br/>
            <p style="font-size: 24px">
              Thanks for joining coding.blog prospective creators list!
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
            <p style="font-size: 24px">
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
    {loading.to(map((_: boolean) => _ ? 'Joining ...' : 'Join the Prospective Creators List'))}
  </button>
  }>
    <p>
      We will use this email to contact you regarding your chosen domain
      name and how you can connect it to your blog's git repository, alongside
      updating you on `coding.blog`'s status and roadmap.
    </p>
    <br/>
    <input _state={email} placeholder="Email Address" type="email"/>
    <br/>
    <label>
      Your preferred domain
      <div style="float: right">
        <span hidden={pack(available, checking).to(map(([a, c]: [boolean, boolean]) => a || c))}> 
          Chosen domain is not available
        </span>
        <span hidden={checking.to(map((_: boolean) => !_))}>
          <Loading/> Checking availability ...
        </span>
        <span hidden={pack(available, checking).to(map(([a, c]: [boolean, boolean]) => !a || c))}>
        <span class="icon-font" style="vertical-align: middle">done_all</span> Domain available
        </span>
      </div>
    </label>
    <input _state={domain} _ref={domainInput} placeholder="Domain, e.g. dude.coding.blog" type="text"/>
  </ActionOverlay>
}