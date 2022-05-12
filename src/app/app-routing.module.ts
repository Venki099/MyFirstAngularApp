import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewItemsComponent } from './new-items/new-items.component';
import { HomeComponent } from './home/home.component';
import { PicklySpecialComponent } from './pickly-special/pickly-special.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';



const routes: Routes = [

{path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'NewItems',component:NewItemsComponent},
  {path:'PicklySpecial',component:PicklySpecialComponent},
  {path: 'cart',component:CartComponent},
  {path:'Contact',component:ContactComponent},
  {path:'user-registration',component:UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
