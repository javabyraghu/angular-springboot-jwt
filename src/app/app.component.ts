import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  isLoggedIn = false;
  roles : string[] = [];

  showAdmin = false;
  showMod = false;

  constructor(private tokenSerive: TokenStorageService) {}

  ngOnInit() {
    this.isLoggedIn = !! this.tokenSerive.getToken() ;

    if(this.isLoggedIn) {
      const user = this.tokenSerive.getUser();
      this.roles = user.roles;

      this.showAdmin = this.roles.includes('ROLE_ADMIN');
      this.showMod = this.roles.includes('ROLE_MODERATOR');
    }
  }

  logOut() {
    this.tokenSerive.logout();
    window.location.reload();
  }
  
}
