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
};
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  values = '';

  constructor(private shelflifeDataService: ShelflifeDataService) { }

  public foods: Food[]=[];

  ngOnInit(){
    this.getFoods();
  }

  onKey(event: any){
    this.values+=event.target.value + ' | ';
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

}
