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
  getEmployeeById(id: number): Observable<User> {  
    return this.http.get<User>(this.url + '/GetEmployeeDetailsById?=' + id);  
  } 
  // Will invoke UserRegistrationsController->PostUserRegistration
  createUser(user: User): Observable<User> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<User>(this.url ,  
    user, httpOptions);  
  }  
  updateUser(user: User): Observable<User> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<User>(this.url + '/'+ user.id, 
    user, httpOptions);  
  }    
  deleteEmployeeById(id: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' +id,  
 httpOptions);  
  }  

}
