import { AccountData } from '../types';

export interface AccountPropOptions {
  prop: keyof(AccountData);
  fallback?: keyof(AccountData);
  empty?: string;
}
