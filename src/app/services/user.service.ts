import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl + '/home';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //DI
  constructor(private http:HttpClient) { }
  //getAll
  getPublicContent() : Observable<any> {
    return this.http.get(baseUrl + '/all', {responseType : 'text'});
  }

  //getUser
  getUserData() : Observable<any> {
    return this.http.get(baseUrl + '/user', {responseType : 'text'});
  }

  //getModerator
  getModeratorData() : Observable<any> {
    return this.http.get(baseUrl + '/mod', {responseType : 'text'});
  }

  //getAdmin
  getAdminData() : Observable<any> {
    return this.http.get(baseUrl + '/admin', {responseType : 'text'});
  }

}
