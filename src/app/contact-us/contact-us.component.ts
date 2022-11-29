import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  firstName=""
  lastName=""
  subject = ""

  readalue =() =>
  {
    let data:any ={"FirstName":this.firstName,"LastName":this.lastName,"Subject":this.subject}
  }

}
