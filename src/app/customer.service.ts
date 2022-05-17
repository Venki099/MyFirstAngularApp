import { Injectable } from '@angular/core';
import { Custreview } from './custreview';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  customers:Custreview[] = [
    {
      img:'https://technext.github.io/vegefoods/images/person_3.jpg',
      Name:'VSG',
      Description:'How wonderfully peculiar. Kendrick is game as always, and the premise is excitingly odd.'

    },
    {
      img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      Name:'MSY',
      Description:' If you are shy about human excretions, this is not for you. But its fun and smart and remarkably serious at moments, though it doesnt take itself seriously for a second.'
    },
    {
      img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      Name:'PQR',
      Description:'Surreal, gross, funny, smart and self-aware ... a perfect companion for shows like the mighty "Community" and "Rick and Morty.'
    }
  ];

  public getReviews(): any{
    const customersObservable = new Observable((observer) => {
      observer.next(this.customers)
    });
    return customersObservable;
  }
}
