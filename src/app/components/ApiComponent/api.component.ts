import { Component, OnInit } from '@angular/core';
import {MyHttpService} from "../../services/my-http.service";
import {Observable} from "rxjs";
import {Times} from "../../classes/times";
import {Results} from "../../classes/results";
import {Datetime} from "../../classes/datetime";
import {ApiResponse} from "../../classes/api-response";


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  datetimes?: Datetime[];
  constructor( private api:MyHttpService) {
  }

  ngOnInit(): void {

    this.api.getTimes().subscribe((data : ApiResponse) => {
      const { datetime } = data.results;
      this.datetimes = datetime;
      console.log(datetime);
      //this.times = datetime[0].times;
    });
  }

}
