import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService
{
  private URL = environment.apiURL;
  id: any
  constructor (private http: HttpClient, private route: ActivatedRoute)
  { }

  getEmployees()
  {
    return this.http.get(this.URL + '/getAllEmployees');
  }
  getDetails(id: number)
  {
    return this.http.get(this.URL + '/employee/' + id)
  }
  addDetails(data: any)
  {
    return this.http.post(this.URL + '/addEmployee', data);
  }
  updateDetails(id: any, data: any)
  {
    return this.http.patch(this.URL + '/updateEmployee/' + id, data)
  }
  deleteDetail(id: any)
  {
    return this.http.delete(this.URL + '/delete-employee/' + id)

  }
}
