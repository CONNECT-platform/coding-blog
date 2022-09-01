import { ajax } from 'rxjs/ajax';
import { BehaviorSubject } from 'rxjs';

import { AccountStatus, AccountData } from './types';


const _LS_Login_Token_Key = '__coding_blog_login_token';
const _Q_Login_Token_Key = 'login_token';
const _API_URL = 'https://api.coding.blog';


interface AccountResponse {
  user: {
    email: string;
    name?: string;
    blog?: {
      name: string;
      git?: {
        url: string;
      },
      publish_url?: string;
    }
  }
}

interface WebhookResponse {
  result: {
    publish_url: string;
  }
}

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
      await new Promise<void>((resolve, reject) => {
        ajax.getJSON<AccountResponse>(_API_URL + `/account?token=${this.token}`).subscribe(
          response => {
            if (response.user) {
              const user: AccountData  = {
                email: response.user.email,
                name: response.user.name,
              };

              if (response.user.blog) {
                user.domain = response.user.blog.name + '.coding.blog';
                if (response.user.blog.git) user.repo = response.user.blog.git.url;
                if (response.user.blog.publish_url) user.publishUrl = response.user.blog.publish_url;
              }

              this.data.next(user); // TODO: complete this
              this.status.next('LoggedIn');
              resolve();
            } else {
              this.status.next('NotLoggedIn');
              reject();
            }
          },
          err => {
            this.status.next('NotLoggedIn');
            reject(err);
          },
        );
      });
    }
  }

  logout() {
    this.status.next('NotLoggedIn');
    this.removeLocalToken();
  }

  async sendLoginEmail(email: string) {
    await new Promise<void>((resolve, reject) => {
      ajax.post(_API_URL + `/login?email=${encodeURIComponent(email)}`).subscribe(
        () => resolve(),
        (error) => reject(error),
      );
    });
  }

  async updateName(name: string) {
    await new Promise<void>((resolve, reject) => {
      ajax.put(_API_URL + `/user/name?name=${encodeURIComponent(name)}&token=${this.token}`)
      .subscribe(
        () => {
          this.data.next(Object.assign({}, this.data.value, { name }));
          resolve();
        },
        err => reject(err),
      )
    });
  }

  async bindRepo(url: string) {
    await new Promise<void>((resolve, reject) => {
      ajax.post(_API_URL + `/blog/git?git_url=${encodeURIComponent(url)}&token=${this.token}`)
      .subscribe(
        response => {
          this.data.next(Object.assign({}, this.data.value, { 
            repo: url,
            publishUrl: response.response.result.publish_url,
          }));
          resolve();
        },
        err => reject(err)
      );
    });
  }

  async refreshPublishUrl() {
    await new Promise<void>((resolve, reject) => {
      ajax.getJSON<WebhookResponse>(_API_URL + `/webhook/create?token=${this.token}&refresh=true`)
      .subscribe(
        response => {
          this.data.next(Object.assign({}, this.data.value, { 
            publishUrl: response.result.publish_url
          }));
          resolve();
        },
        err => reject(err)
      );
    });
  }
}
