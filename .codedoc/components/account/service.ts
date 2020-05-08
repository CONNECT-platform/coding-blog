import { ajax } from 'rxjs/ajax';
import { BehaviorSubject } from 'rxjs';
import { AccountStatus, AccountData } from './types';


const _LS_Login_Token_Key = '__coding_blog_login_token';
const _Q_Login_Token_Key = 'login-token';

// TODO: deprecate this
const _MockToken = () => [
  Math.random().toString(36).substring(2), 
  Math.random().toString(36).substring(2), 
  Math.random().toString(36).substring(2),
  Math.random().toString(36).substring(2)].join('');

export class AccountService {
  static __instance: AccountService;

  static instance() {
    if (!this.__instance) this.__instance = new AccountService();
    return this.__instance;
  }


  readonly data = new BehaviorSubject<AccountData | undefined>(undefined);
  readonly status = new BehaviorSubject<AccountStatus>('NotLoggedIn');
  public token: string | undefined;

  constructor() {
    this.login();
  }

  tokenFromQuery() { return new URLSearchParams(window.location.search).get(_Q_Login_Token_Key) || undefined; }
  tokenFromLocal() { return localStorage.getItem(_LS_Login_Token_Key) || undefined; }
  removeLocalToken() { localStorage.removeItem(_LS_Login_Token_Key); }
  storeTokenLocally(token: string) { localStorage.setItem(_LS_Login_Token_Key, token); }

  login() {
    if (this.status.value === 'NotLoggedIn') {
      if ((this.token = this.tokenFromQuery() || this.tokenFromLocal())) {
        const token = this.token;
        this.fetchData()
        .then(() => {
          this.storeTokenLocally(token);
          this.token = token;
        })
        .catch(() => {
          this.token = undefined;
          this.removeLocalToken();
        });
      }
    }
  }

  async fetchData() {
    if (this.token) {
      this.status.next('Checking');

      // TODO: connect to API
      // START OF MOCK
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (this.token === 'eugene') {
        this.data.next({
          email: 'ghanizadeh.eugene@gmail.com',
          domain: 'eugene.coding.blog',
          repo: 'https://github.com/loreanvictor/techblog.git',
          publishUrl: 'https://api.coding.blog/publish?token=AWDHasd8asDSD&=asd.asdSDHIUgASD89878a7dss+=='
        });
        this.status.next('LoggedIn');
      } else {
        this.status.next('NotLoggedIn');
        throw new Error('Wrong Token');
      }
      // END OF MOCK
    }
  }

  logout() {
    this.status.next('NotLoggedIn');
    this.removeLocalToken();
  }

  async sendLoginEmail(email: string) {
    // TODO: connect to API
    // START OF MOCK
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('SENDING LOGIN LINK TO:: ' + email);
    // END OF MOCK
  }

  async updateName(name: string) {
    // TODO: connect to API
    // START OF MOCK
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.data.next(Object.assign({}, this.data.value, {
      name
    }));
    // END OF MOCK
  }

  async bindRepo(url: string) {
    // TODO: connect to API
    // START OF MOCK
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.data.next(Object.assign({}, this.data.value, {
      repo: url,
      publishUrl: 'https://api.coding.blog/publish?token=' + _MockToken(),
    }));
    // END OF MOCK
  }

  async refreshPublishUrl() {
    // TODO: connect to API
    // START OF MOCK
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.data.next(Object.assign({}, this.data.value, {
      publishUrl: 'https://api.coding.blog/publish?token=' + _MockToken(),
    }));
    // END OF MOCK
  }

  async publishBlog() {
    // TODO: connect to API
    // START OF MOCK
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('PUBLISHING AT:: ' + this.data.value?.publishUrl);
    // END OF MOCK
  }
}
