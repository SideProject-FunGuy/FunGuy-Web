import { Component, OnInit } from '@angular/core';
import { ShelflifeDataService } from '../shelflife-data.service';
import { NewFood } from '../food';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent implements OnInit {

  public newFood: NewFood = {
    name: '',
    expiryDuration: '',
    expiryDate: '',
    category: ''
  };

  constructor(private shelflifeDataService: ShelflifeDataService) { }

  ngOnInit(): void {
  }

  public onNewFoodSubmit(): void{
    this.shelflifeDataService.addFood(this.newFood)
      .then((food: NewFood)=>{
        console.log('Food saved', food);
      });
    this.resetForm();
  }

  private resetForm(): void{
    this.newFood.name= '';
    this.newFood.expiryDuration= '';
    this.newFood.expiryDate= '';
    this.newFood.category='';
  }

}
