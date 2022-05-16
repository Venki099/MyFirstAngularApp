import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  isShowDivIf = false;
  
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  addProduct($event: any) { 
  
    //this.p = $event;  
    //this.p=($event);
    this.products.push($event)
   
    }  

    p:any=[];

  constructor() { }

  products:Product[] = [
    {
      "id": 1,
      "title": "BROCOLLI",
      "price": 120,
      "description": "Broccoli is an edible green plant in the cabbage family whose large flowering head, stalk and small associated leaves are eaten as a vegetable. Broccoli is classified in the Italica cultivar group of the species Brassica oleracea.",
      "category": "Vegetable",
      "image": "https://technext.github.io/vegefoods/images/product-6.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Apple ",
      "price": 129,
      "description": "An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii,",
      "category": "Fruit",
      "image": "https://technext.github.io/vegefoods/images/product-10.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
    
  ]

  ngOnInit(): void {
  }

}
