import { Component, OnInit } from '@angular/core';
import { Custreview } from '../custreview';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

customers: Custreview[] = [];
  constructor(private customersservice : CustomerService) { }

  ngOnInit(): void {
    const customersObservable = this.customersservice.getReviews();
    customersObservable.subscribe((customerData:Custreview[]) =>{
      this.customers = customerData
    })
  }

}
