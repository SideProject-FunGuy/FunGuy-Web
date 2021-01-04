import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Onboarding1Component } from './onboarding1/onboarding1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PantryComponent } from './pantry/pantry.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    RegisterComponent,
    LoginComponent,
    Onboarding1Component,
    PantryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
