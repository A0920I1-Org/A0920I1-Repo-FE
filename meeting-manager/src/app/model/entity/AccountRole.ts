import {Account} from './Account';
import {Role} from './Role';


export class AccountRole {
  id: number;
  role: Role;
  account: Account;

  constructor(id: number, role: Role, account: Account) {
    this.id = id;
    this.role = role;
    this.account = account;
  }
}
