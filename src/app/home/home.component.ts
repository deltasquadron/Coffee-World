import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  random: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getRandom().subscribe(data => {
      this.random = Array.of(data);
      console.log(this.random);
    }
    );
  }

}
