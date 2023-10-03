import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent
{
  employees: any;
  list: any
  constructor (private http: HttpClient, private router: Router, private employeeService: EmployeeService)
  {
    this.employeeService.getEmployees().subscribe(values =>
    {
      this.list = values;
      this.employees = values;
    })
  }
  searchDetails(event: any)
  {
    if ((event.target.value).length >= 3) {
      
      this.employees = this.list.filter((item: any) =>
      {
        return item.empid.includes(event.target.value)
      })
      if (this.employees.length === 0) {
        alert("Employee not found!")
        event.target.value = ''
        return this.employees = this.list
      }
      else {
        // event.target.value = ''
        return this.employees;
      }
    }
    else {
      return this.employees=this.list
    }
  }

  delete(value: any)
  {
    console.log(value);
    confirm("Are you want to delete?")
    this.employeeService.deleteDetail(value).subscribe((value) =>
    {
      window.location.reload()
    })
  }


}
