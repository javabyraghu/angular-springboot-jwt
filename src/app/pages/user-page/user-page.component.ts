import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  content? : string ;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.getUserData().subscribe(
        data=> {
          this.content = data;
        }, err => {
          console.log(err);
        }
      );
  }

}
