import {AccountRole} from './AccountRole';

export class Role {
  id: number;
  name: string;
  accountRoleList: AccountRole[];

  constructor(id: number, name: string, accountRoleList: AccountRole[]) {
    this.id = id;
    this.name = name;
    this.accountRoleList = accountRoleList;
  }
}
