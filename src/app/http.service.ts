import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get(
      'https://api.spoonacular.com/recipes/findByIngredients?apiKey=fc5c0e70690646989f88dc470d314cc2&ingredients=coffee&type=drink'
      );
  }
  getRandom() {
    return this.http.get(
      'https://api.spoonacular.com/recipes/complexSearch?apiKey=fc5c0e70690646989f88dc470d314cc2&number=1&query=coffee&sort=random&addRecipeInformation=true&fillIngredients=true'
      );
  }

}
