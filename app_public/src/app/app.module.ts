import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { CarouselModule } from 'ngx-owl-carousel-o';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Onboarding1Component } from './onboarding1/onboarding1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PantryComponent } from './pantry/pantry.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SearchComponent } from './search/search.component';
import { NewItemComponent } from './new-item/new-item.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { QuickAddComponent } from './quick-add/quick-add.component';

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
    NewItemComponent,
    AddNewItemComponent,
    QuickAddComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    // MatDatepickerModule,
    // MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
