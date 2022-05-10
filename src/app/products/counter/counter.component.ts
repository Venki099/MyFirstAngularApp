import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count =1; 

  receivecount($event: number) {  
    this.count = $event;  
    } 

  constructor() { }

  ngOnInit(): void {
  }

}
