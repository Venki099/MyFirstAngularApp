import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  url = 'https://localhost:44361/Api/CustomerRegistrations'

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url );
  }
  getEmployeeById(employeeId: string): Observable<User> {  
    return this.http.get<User>(this.url + '/GetEmployeeDetailsById/' + employeeId);  
  } 
  // Will invoke UserRegistrationsController->PostUserRegistration
  createUser(user: User): Observable<User> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<User>(this.url ,  
    user, httpOptions);  
  }  
  updateEmployee(employee: User): Observable<User> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<User>(this.url + '/UpdateEmployeeDetails/',  
    employee, httpOptions);  
  }  
  deleteEmployeeById(employeeid: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' +employeeid,  
 httpOptions);  
  }  

}
