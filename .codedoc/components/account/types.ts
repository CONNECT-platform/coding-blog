export interface AccountData {
  name?: string;
  email: string;
  domain?: string;
  repo?: string;
  publishUrl?: string;
}


export type AccountStatus = 'NotLoggedIn' | 'Checking' | 'LoggedIn';

