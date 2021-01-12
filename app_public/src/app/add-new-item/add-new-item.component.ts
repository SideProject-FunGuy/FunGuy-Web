import { Component, OnInit } from '@angular/core';
import { ShelflifeDataService } from '../shelflife-data.service';
import { Food } from '../food';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent implements OnInit {

  public newFood: Food = {
    name: '',
    expiryDuration: '',
    expiryDate: new Date(),
    category: ''
  };

  constructor(private shelflifeDataService: ShelflifeDataService) { }

  ngOnInit(): void {
  }

  public onNewFoodSubmit(): void{
    this.shelflifeDataService.addFood(this.newFood)
      .then((food: Food)=>{
        console.log('Food saved', food);
      })
  }

}
