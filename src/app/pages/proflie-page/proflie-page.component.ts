import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-proflie-page',
  templateUrl: './proflie-page.component.html',
  styleUrls: ['./proflie-page.component.css']
})
export class ProfliePageComponent implements OnInit {

  currentUser : any;

  constructor(private tokenService : TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
  }

}
