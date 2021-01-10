import { Component, OnInit } from '@angular/core';
import { ShelflifeDataService } from '../shelflife-data.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Food {
  id: string;
  name: string;
  url: string;
  // food_location: string;
  // food_tips: string[];
  // expirationString: string;
  // expirationTime: number;
  // category: string;
  constructor(){
    this.id='';
    this.name='';
    this.url='';
    // this.food_location='';
    // this.food_tips=[];
    // this.expirationString='';
    // this.expirationTime= 0;
    // this.category='none';
  }
};

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {

  constructor(private shelflifeDataService: ShelflifeDataService, private http: HttpClient) { }

  public foods: Food[]=[];

  ngOnInit(){
    this.getFoods();
  }

  private getFoods(): void{
    this.shelflifeDataService
      .getFoods()
        .then(foundFoods => this.foods=foundFoods);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something went wrong', error);
    return Promise.reject(error.message || error);
  }
  // private getFoods(): void{
  //   this.shelflifeDataService
  //     .getFoods()
  //       .then(foundFoods => this.foods = foundFoods)
  //       .then(console.log(this.foods));
  // }
  //  = [{
  //   food_id: '17879',
  //   food_name: 'Parsley - Fresh, Raw',
  //   food_location: 'Refrigerator',
  //   food_tips: ['Trim the ends and place in a glass containing about one inch of water', 'Cover with a loose-fitting plastic bag and refrigerate'],
  //   expirationString: '7-10 days',
  //   expirationTime: 604800,
  //   category: 'Herbs & Spices'
  // },
  // {
  //   food_id: '19028',
  //   food_name: 'Iced Tea',
  //   food_location: 'Refrigerator',
  //   food_tips: ['The precise answer to the question depends to a large extent on storage conditions - store unopened bottles of iced tea in a cool, dark area.'],
  //   expirationString: '18-24 months (best quality)',
  //   expirationTime: 46656000,
  //   category: 'Beverages'
  // }];



}
