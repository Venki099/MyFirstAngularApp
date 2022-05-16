import { Component, OnInit } from '@angular/core';
//Observable module to Observables provide support for passing messages between 
//parts of your application. They are used frequently in Angular and are 
//the recommended technique for event handling, 
//asynchronous programming, and handling multiple values.
import { Observable } from 'rxjs';
//import user.ts
import { User } from '../user';
//import user-service.service.ts
import { UserserviceService } from '../userservice.service';
//import for Form designing in Angular
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit 
{
 
  Gender = ['male', 'female'];
  allUsers! :Observable<User[]>; 
  userForm! :FormGroup;
  dataSaved = false;
  
 
  userIdUpdate : any;
  massage = 'ABC';//
  updateEmployeeId = null;
  employeeForm:any
  //inheriting UserServiceService from user-service.service.ts
  constructor(private userservice:UserserviceService,private router: Router)
  {
    
  }
  //create a function onSubmit 
  onSubmit()
  {
    console.log(this.userForm)
    this.dataSaved = false;
    const user = this.userForm.value;
    //Invoking the CreateUser function
    this.CreateUser(user);
    this.userForm.reset();
  }
  //create a function onSubmit CreateUser
  CreateUser(user: User) {
    if (this.userIdUpdate == null) {
      //subscribe() is a method on the Observable type. The Observable type is a 
      //utility that asynchronously or synchronously streams data 
      //to a variety of components or services that have subscribed to the observable.
      this.userservice.createUser(user).subscribe(
        () => {
          this.dataSaved = true;
          this.massage = 'Record saved Successfully';
          this.loadAllUsers();
          this.userIdUpdate = null;
          this.userForm.reset();
        }
      );
    } else {
      user.id = this.userIdUpdate;
      this.userservice.updateUser(user).subscribe(() => {
        this.dataSaved = true;
        this.massage = 'Record Updated Successfully';
        this.loadAllUsers();
        this.userIdUpdate = null;
        this.userForm.reset();
      });
    }
  }
  ngOnInit(): void {
    
    this.loadAllUsers();
    console.log(this.allUsers)
    this.userForm=new FormGroup({
      'FirstName':new FormControl(null),
      'LastName':new FormControl(null),
      'Email':new FormControl(null),
      'Password':new FormControl(null),
      'Confirmpassword':new FormControl(null),
      'Phonenumber':new FormControl(null)
    })
    
  }

  
  loadAllUsers()
  {
    this.allUsers=this.userservice.getAllUsers();
  }

  loadEmployeetoEdit(userid: number){
    this.userservice.getEmployeeById(userid).subscribe( user => {
      //this.massage = 'xyz';
      //this.dataSaved = false;
      this.userIdUpdate = user.id;
      this.userForm.controls['FirstName'].setValue(user.FirstName)
      this.userForm.controls['LastName'].setValue(user.LastName)
      this.userForm.controls['Email'].setValue(user.Email)
      this.userForm.controls['Password'].setValue(user.Password)
      this.userForm.controls['Confirmpassword'].setValue(user.Confirmpassword)
      this.userForm.controls['Phonenumber'].setValue(user.Phonenumber)
    });

  }

  deleteEmployee(userId: number){
    if (confirm("Are you sure you want to delete this ?")) {  
      this.userservice.deleteEmployeeById(userId).subscribe(() => {
        //this.dataSaved = true;
       // this.message = 'Record Deleted Succefully';
        this.loadAllUsers();
        this.userIdUpdate = null;
        this.userForm.reset();
  
      });
    }
  }
}
