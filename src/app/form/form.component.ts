import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

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
export class FormComponent
{
  id!: number;
  employees!: any
  constructor (private http: HttpClient, private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService)
  {
    this.route.params.subscribe((params) => this.id = params['id']);
    if (this.id) {
      this.employeeService.getDetails(this.id).subscribe(value => { this.employees = value })
    }
  }
  formSubmit(form: NgForm)
  {
    if (this.id) {
      const data = { empid: form.value.emp_id, name: form.value.name, dob: form.value.dob, email: form.value.email }
      this.employeeService.updateDetails(this.id, data).subscribe(value =>
      {
        this.router.navigate(['/']);
      })
    }
    else {
      const data = { empid: form.value.emp_id, name: form.value.name, dob: form.value.dob, email: form.value.email }
      this.employeeService.addDetails(data).subscribe({
        next: value =>
        {
          this.router.navigate(['/']);
        },
        error: err =>
        {
          alert(err.error.error.message)
        }
      })
    }
    form.reset()
  }
}
