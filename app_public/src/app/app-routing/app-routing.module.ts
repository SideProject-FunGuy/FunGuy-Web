import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashPageComponent } from '../splash-page/splash-page.component';
import { Onboarding1Component } from '../onboarding1/onboarding1.component';
import { PantryComponent } from '../pantry/pantry.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { SearchComponent } from '../search/search.component';
import { NewItemComponent } from '../new-item/new-item.component';
import { AddNewItemComponent } from '../add-new-item/add-new-item.component';
import { QuickAddComponent } from '../quick-add/quick-add.component';

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
  },
  {
    path: 'pantry',
    component: PantryComponent
  },
  {
    path: 'statistics',
    component: StatisticsComponent
  }, {
    path: 'search',
    component: SearchComponent
  }, {
    path: 'new-item',
    component: NewItemComponent
  },
  {
    path: 'add-new',
    component: AddNewItemComponent
  },
  {
    path: 'quick-add',
    component: QuickAddComponent
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
