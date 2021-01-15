import { Component, OnInit } from '@angular/core';
import { ShelflifeDataService } from '../shelflife-data.service';
import { Food } from '../food';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public isShown: Boolean = false;

  constructor(private shelflifeDataService: ShelflifeDataService) { }

  public foods: Food[]=[];

  ngOnInit(){

  }

  onKeyDown(event: any){
    this.isShown = ! this.isShown;

  }

  toggleShow(){

  }


  private handleError(error: any): Promise<any> {
    console.error('Something went wrong', error);
    return Promise.reject(error.message || error);
  }

}
