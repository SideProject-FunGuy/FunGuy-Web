import { Component, OnInit } from '@angular/core';
import { ShelflifeDataService } from '../shelflife-data.service';

export class Food {
  food_id: string;
  food_name: string;
  // food_location: string;
  // food_tips: string[];
  // expirationString: string;
  // expirationTime: number;
  // category: string;
  constructor(){
    this.food_id='';
    this.food_name='';
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

  public foods: Food[]=[];

  constructor(private shelflifeDataService: ShelflifeDataService) { }

  private getFoods(): void{
    this.shelflifeDataService
      .getFoods()
        .then(foundFoods => this.foods = foundFoods);
  }
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

  ngOnInit(){
    this.getFoods();
  }

}
