import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EmployeeService } from '../service/employee.service';
import { deleteData, loadData } from '../store/data.action';
import { EmployeeModel } from '../store/data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  employees: any;
  list: any
  error: any
  constructor (private http: HttpClient, private router: Router, private store: Store<{ employeeDetails: EmployeeModel }>, private employeeService: EmployeeService)
  { }
  ngOnInit()
  {
    this.store.dispatch(loadData())
    this.store.select('employeeDetails').subscribe((value) =>
    {
      this.list = value.employeeDetails;
      this.employees = value.employeeDetails;
      this.error = value.error
      if (this.error) {
        alert("Something went wrong!")

      }
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
      return this.employees = this.list
    }
  }
  edit(value: any)
  {
    this.router.navigate(['/form/' + value.empid])
  }
  delete(value: any)
  {

    confirm("Are you want to delete?");
    this.store.dispatch(deleteData(value));

  }


}
