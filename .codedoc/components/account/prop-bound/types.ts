import { AccountData } from '../types';

export interface AccountPropBoundOptions {
  prop: keyof(AccountData);
  unset?: 'true' | 'false';
}
