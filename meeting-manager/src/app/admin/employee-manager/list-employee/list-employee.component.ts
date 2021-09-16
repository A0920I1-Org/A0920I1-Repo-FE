import { EmployeeService } from './../../../service/employeeService';
import { IEmployeeDto } from './../employeeDTO/EmployeeListDto';
import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  page = 0;
  totalPage: number;
  employee: IEmployeeDto;

  public deleteEmployee: IEmployeeDto;

  public listEmployee: IEmployeeDto[] = [];


  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getListEmployee();
  }

  getListEmployee(): void {
    this.employeeService.getAllEmployee(this.page).subscribe((data) => {
      this.listEmployee = data.content;
      console.log(data);
      this.totalPage = data.totalPages;
    });
  }

  paginate(page: number) {
    if (page >= 0 && page < this.totalPage) {
      this.page = page;
      this.ngOnInit();
    }
  }

  deleteEmployeeById(id: number) {
    this.employeeService.deleteEmployeeById(id).subscribe(
      (response: void) => {
        this.ngOnInit();
        console.log(id);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchStaffByKey(key: string): void {
    console.log(key);
    const results: IEmployeeDto[] = [];
    for (const employee of this.listEmployee) {
      if (employee.fullName.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.listEmployee = results;
    if (results == null || !key) {
      this.getListEmployee();
    }

  }

  public onOpenModal(employee: IEmployeeDto, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'delete') {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }

}
