import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  content? : string ;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.getAdminData().subscribe(
        data=> {
          this.content = data;
        }, err => {
          console.log(err);
        }
      );
  }

}
