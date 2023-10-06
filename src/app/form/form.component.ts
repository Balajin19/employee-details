import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EmployeeService } from '../service/employee.service';
import { addData, getData, updateData } from '../store/data.action';
import { EmployeeModel } from '../store/data.model';

interface Employee
{
  empid: Number,
  name: String,
  email: String,
  dob: String,
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit
{
  id!: number;
  employees!: any
  error: any;
  constructor (private http: HttpClient, private router: Router, private store: Store<{ employeeDetails: EmployeeModel }>, private route: ActivatedRoute, private employeeService: EmployeeService)
  {

  }
  ngOnInit()
  {
    this.route.params.subscribe((params) => this.id = params['id']);
    if (this.id) {
      let id = this.id
      this.store.dispatch(getData({ id }))
      this.store.select('employeeDetails').subscribe((value) =>
      {
        this.employees = value.employeeDetails;
        this.error = value.error
        if (this.error) {
          alert("Something went wrong!")
          this.router.navigate(['/']);
        }
      })
    }
   
  }
  formSubmit(form: NgForm)
  {
    if (this.id) {
      let id = this.id;
      const data = { empid: form.value.empid, name: form.value.name, dob: form.value.dob, email: form.value.email }
      this.store.dispatch(updateData({ id, data }))
      this.router.navigate(['/']);

    }
    else {
      const data = { empid: form.value.empid, name: form.value.name, dob: form.value.dob, email: form.value.email }
      this.store.dispatch(addData({ data }))
      this.router.navigate(['/']);

    }
    form.reset()
  }
}
