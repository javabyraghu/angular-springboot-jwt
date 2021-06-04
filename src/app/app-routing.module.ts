import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { ModeratorGuard } from './guards/moderator.guard';
import { UserGuard } from './guards/user.guard';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ModeratorPageComponent } from './pages/moderator-page/moderator-page.component';
import { ProfliePageComponent } from './pages/proflie-page/proflie-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  {
    path: 'profile',
    component: ProfliePageComponent,
    canActivate: [UserGuard],
  },
  { path: 'user', component: UserPageComponent, canActivate: [UserGuard] },
  {
    path: 'mod',
    component: ModeratorPageComponent,
    canActivate: [ModeratorGuard],
  },
  { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
