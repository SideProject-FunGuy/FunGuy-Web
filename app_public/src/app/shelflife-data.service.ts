import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiFood } from './food';
import { Food } from './food';
import { NewFood } from './food';
import { MockFood } from './food';


@Injectable({
  providedIn: 'root'
})
export class ShelflifeDataService {
  private apiBaseUrl = 'http://localhost:3000/api';

  public getFoods():Promise<ApiFood[]>{
    const url: string=`${this.apiBaseUrl}/pantry`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as ApiFood[])
      .catch(this.handleError);
  }

  public getSearchedFoods(search: String):Promise<ApiFood[]>{
    const url: string=`${this.apiBaseUrl}/search/${search}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as ApiFood[])
      .catch(this.handleError);
  }

  public getMockFoods(search: String):Promise<MockFood[]>{
    const url: string=`${this.apiBaseUrl}/search/${search}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as MockFood[])
      .catch(this.handleError);
  }

  public addFood(formData: NewFood): Promise<NewFood>{
    const url: string=`${this.apiBaseUrl}/new`;

    return this.http
      .post(url, formData)
      .toPromise()
      .then(response => response as NewFood)
      .catch(this.handleError);
  }

  public deleteFood(id: String){
    const url: string=`${this.apiBaseUrl}/pantry/${id}`;
    return this.http
      .delete(url);
  }

  public getPantryFoods():Promise<Food[]>{
    const url: string=`${this.apiBaseUrl}/pantry`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Food[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something went wrong', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: HttpClient) { }


}
