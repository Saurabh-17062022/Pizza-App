import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent} from './home/home.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
{path:'search/:searchItem', component:HomeComponent},
{path:'tag/:tag', component:HomeComponent},
{path:'item/:id', component:ItemPageComponent},
{path:'login', component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'cart',component:CartPageComponent},
{path:'item/:id', component:ItemPageComponent},
{path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
