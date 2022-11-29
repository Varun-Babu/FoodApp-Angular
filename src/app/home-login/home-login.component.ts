import { Component } from '@angular/core';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent {
  Username =""
  Password=""

  readValue = () =>
  {
    let data:any = {"Username":this.Username,"Password":this.Password}

    if(this.Username=="admin" && this.Password == "123")
    {
      alert("valid")
    }
    else{
      alert("invalid")
    }
  
  }


}
