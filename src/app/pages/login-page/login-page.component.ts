import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/login-model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  //-------------------------------------------
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles : string[] = [];
  loginModel : LoginModel = new LoginModel('','');

  // Injections
  constructor(
    private auth: AuthenticationService,
    private tokenService: TokenStorageService
  ) {}

  //check is user logged in already
  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenService.getUser().roles;
    }

  }

  //on login submit
  onSubmit() {
    this.auth.loginUser(this.loginModel).subscribe(
      data => {
        this.tokenService.saveToken(data.token);
        this.tokenService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenService.getUser().roles;
        this.reloadPage();
      }, err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }


}
