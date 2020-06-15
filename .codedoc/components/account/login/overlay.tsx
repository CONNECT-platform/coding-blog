import { RendererLike, ref } from '@connectv/html';
import { Loading, Overlay } from '@codedoc/core/components';
import { not, or } from 'rxmetics';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { JoinBetaOverlay } from '../../join-beta';
import { ActionOverlay } from '../../action-overlay';
import { AccountService } from '../account.service';


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function LoginOverlay(_: any, renderer: RendererLike<any, any>) {
  const close = ref<() => void>();
  const email = new BehaviorSubject('');
  const loading = new BehaviorSubject(false);
  const valid = email.pipe(map(v => emailRegex.test(v)));
  const service = AccountService.instance();

  return <ActionOverlay title='Login' close={close} actions={
    <button disabled={or(loading, not(valid))} onclick={() => {
      loading.next(true);
      service.sendLoginEmail(email.value)
      .then(() => {
        loading.next(false);
        close.$();
        renderer.render(<Overlay>
            <span class="icon-font" style="font-size: 128px">email</span><br/>
            Login Link Emailed<br/>
            <p style="font-size: 24px">
              We've emailed you a login link. Open your email account and follow that link
              to log in. Be sure to check your spam folder.
            </p>
        </Overlay>).on(document.body);
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
      <span style="margin: 0 16px">{loading.pipe(map(v => v ? 'Logging in ...' : 'Log In'))}</span>
    </button>
  }>
    <p>
      Enter your email address and we'll send a login link to given email address.
      Open that link in a browser and you will be logged in.

      <br/><br/>

      Since we are in alpha stage, you will only recieve a login link if you have
      an account, which you should have recieved an email about. If not, you perhaps
      do not have an account yet, but you can <a 
        style="color: white !important; text-decoration: underline !important; cursor: pointer !important"
        onclick={() => {
        close.$();
        renderer.render(<JoinBetaOverlay/>).on(document.body);
      }}>
        sign up for our beta waiting list
      </a> and we will inform you via email when your account is created.
    </p>
    <input _state={email} placeholder="Email Address" type="email"/>
  </ActionOverlay>
}
