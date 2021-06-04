import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(
    private tokenService: TokenStorageService,
    private router: Router
  ) {}

  canActivate(): boolean {
    let status = this.tokenService.isValidUser('ROLE_USER');
    if (!status) this.router.navigate(['/']);
    return status;
  }
}
