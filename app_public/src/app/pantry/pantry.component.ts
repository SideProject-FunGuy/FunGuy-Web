import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShelflifeDataService } from '../shelflife-data.service';
import { Food } from '../food';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {
  public foods: Food[]=[];

  constructor(
    private shelflifeDataService: ShelflifeDataService,
    private router: Router
  ) { }


  ngOnInit(){
    this.getPantryFoods();
  }

  public delete(id: String):void{
    this.shelflifeDataService
      .deleteFood(id)
  }

  private getPantryFoods(): void{
    this.shelflifeDataService
      .getPantryFoods()
        .then(foundFoods => this.foods = foundFoods);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something went wrong', error);
    return Promise.reject(error.message || error);
  }

}
