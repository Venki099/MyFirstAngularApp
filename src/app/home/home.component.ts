import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Welcome to Pickly";
  quote = "To get the best results you must talk to your vegetables.";

  //Property Binding
  image = "/assets/images/vegetables.jpg";

  //Event Binding
  onClick(){
    alert("Hello");
  }

  
 

  constructor() { }

  ngOnInit(): void {
  }

}
