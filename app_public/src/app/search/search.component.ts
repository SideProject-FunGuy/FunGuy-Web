import { Component, OnInit } from '@angular/core';
import { ShelflifeDataService } from '../shelflife-data.service';
import { ApiFood } from '../food';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  values = '';

  constructor(private shelflifeDataService: ShelflifeDataService) { }

  public foods: ApiFood[]=[];

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
