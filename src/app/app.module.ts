import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ModeratorPageComponent } from './pages/moderator-page/moderator-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ProfliePageComponent } from './pages/proflie-page/proflie-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './security/auth.interceptor';
import { AdminGuard } from './guards/admin.guard';
import { ModeratorGuard } from './guards/moderator.guard';
import { UserGuard } from './guards/user.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    HomePageComponent,
    AdminPageComponent,
    ModeratorPageComponent,
    UserPageComponent,
    ProfliePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [authInterceptorProviders, AdminGuard, ModeratorGuard, UserGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
