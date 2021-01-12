import { Component, OnInit } from '@angular/core';
import { ShelflifeDataService } from '../shelflife-data.service';

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
}

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  value='';
  public foods: Food[]=[];

  constructor(private shelflifeDataService: ShelflifeDataService) { }

  ngOnInit(): void {

  }

  onEnter(value: string) {
    this.value = value;
    this.getSearchedFoods(value);
  }

  private getSearchedFoods(data: String): void{
    this.shelflifeDataService
      .getSearchedFoods(data)
        .then(foundFoods => this.foods=foundFoods);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something went wrong', error);
    return Promise.reject(error.message || error);
  }

}
