import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { FoodPageComponent } from './food-page/food-page.component';

const myRoute : Routes=[
  {
    path:"",
    component:HomeLoginComponent},
    {
      path:"food",
      component:FoodPageComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeLoginComponent,
    FoodPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
