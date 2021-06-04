import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  //form backing object
  user : UserModel = new UserModel('','','');
  //register success or not?
  isSuccessful : boolean = false;
  // display message given by BackendApp
  message : string = '';

  //Inject service 
  constructor(private auth : AuthenticationService) { }

  ngOnInit(): void {
  }

  //on Form submit
  onSubmit() {
    this.auth.registerUser(this.user).subscribe(
      data => {
        console.log(data);
        this.message = data.message;
        this.isSuccessful = true;
      },err => {
        console.log(err);
        this.isSuccessful = false;
        this.message = err.error.message;
      }
    );
  }

}
