import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Onboarding1Component } from './onboarding1/onboarding1.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    RegisterComponent,
    LoginComponent,
    Onboarding1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
