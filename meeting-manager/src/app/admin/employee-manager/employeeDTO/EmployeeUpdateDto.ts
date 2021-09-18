export class EmployeeUpdateDto {
  id: number;
  fullname: string;
  division: string;
  roleId: number;
  username: string;
  password: string;
  phone: string;
  email: string;
  imageUrl: string;

  // tslint:disable-next-line:max-line-length
  constructor(id: number, fullname: string, division: string, role: number, username: string, password: string, phone: string, email: string, imageUrl: string) {
    this.id = id;
    this.fullname = fullname;
    this.division = division;
    this.roleId = role;
    this.username = username;
    this.password = password;
    this.phone = phone;
    this.email = email;
    this.imageUrl = imageUrl;
  }

}
