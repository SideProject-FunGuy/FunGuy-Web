import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_BASE_HREF } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Onboarding1Component } from './onboarding1/onboarding1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PantryComponent } from './pantry/pantry.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SearchComponent } from './search/search.component';
<<<<<<< HEAD
import { SearchResultComponent } from './search-result/search-result.component';
=======
import { NewItemComponent } from './new-item/new-item.component';
>>>>>>> search-pages

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    Onboarding1Component,
    RegisterComponent,
    LoginComponent,
    PantryComponent,
    StatisticsComponent,
    SearchComponent,
<<<<<<< HEAD
    SearchResultComponent,
=======
    NewItemComponent,
>>>>>>> search-pages
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
