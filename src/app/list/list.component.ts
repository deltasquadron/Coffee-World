import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  recipes: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getRecipes().subscribe(data => {
      this.recipes = data;
      console.log(this.recipes);
    }
    );
  }

}
