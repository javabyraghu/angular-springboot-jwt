import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-moderator-page',
  templateUrl: './moderator-page.component.html',
  styleUrls: ['./moderator-page.component.css']
})
export class ModeratorPageComponent implements OnInit {

  content? : string ;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.getModeratorData().subscribe(
        data=> {
          this.content = data;
        }, err => {
          console.log(err);
          
        }
      );
  }

}
