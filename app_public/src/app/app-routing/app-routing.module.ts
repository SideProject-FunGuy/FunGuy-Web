import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashPageComponent } from '../splash-page/splash-page.component';
import { Onboarding1Component } from '../onboarding1/onboarding1.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  {
    path: '',
    component: SplashPageComponent
  },
  {
    path: 'onboarding1',
    component: Onboarding1Component
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
