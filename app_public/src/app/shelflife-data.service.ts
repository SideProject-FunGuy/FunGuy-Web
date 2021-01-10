import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Food } from './pantry/pantry.component';

@Injectable({
  providedIn: 'root'
})
export class ShelflifeDataService {
  private apiBaseUrl = 'http://localhost:3000/api';

  public getFoods():Promise<Food[]>{
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
