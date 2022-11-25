import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { NearHotelsComponent } from './near-hotels/near-hotels.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute : Routes=[
  {
    path:"",
    component:HomeLoginComponent},
    {
      path:"food",
      component:FoodPageComponent
    },
    {
      path:"hotels",
      component:NearHotelsComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeLoginComponent,
    FoodPageComponent,
    NearHotelsComponent,
    NavbarComponent
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
