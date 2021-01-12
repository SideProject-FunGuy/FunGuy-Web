import { Component, OnInit } from '@angular/core';
import { ShelflifeDataService } from '../shelflife-data.service';
import { ApiFood } from '../food';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {

  constructor(private shelflifeDataService: ShelflifeDataService) { }

  public foods: ApiFood[]=[];


  ngOnInit(){
    this.getFoods();
  }

  private getFoods(): void{
    this.shelflifeDataService
      .getFoods()
        .then(foundFoods => this.foods = foundFoods);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something went wrong', error);
    return Promise.reject(error.message || error);
  }

}
