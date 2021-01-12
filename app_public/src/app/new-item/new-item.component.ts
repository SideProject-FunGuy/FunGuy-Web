import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShelflifeDataService } from '../shelflife-data.service';
import { ApiFood } from '../food';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  value='';
  public foods: ApiFood[]=[];

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
