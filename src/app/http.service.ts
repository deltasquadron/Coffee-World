import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get(
      "https://api.spoonacular.com/recipes/findByIngredients?apiKey=d416a15e9af1466491905f0dad4d4f30&ingredients=coffee&type=drink&addRecipeInformation=true"
    );
  }
  getRandom() {
    return this.http.get(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=d416a15e9af1466491905f0dad4d4f30&number=1&query=coffee&sort=random&addRecipeInformation=true&fillIngredients=true"
    );
  }
}
