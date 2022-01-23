import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Times} from "../classes/times";
import {HttpClient} from "@angular/common/http";
import {Results} from "../classes/results";
import {ApiResponse} from "../classes/api-response";

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private http: HttpClient) { }



  public getTimes(): Observable<ApiResponse>{

    return this.http.get<ApiResponse>("https://api.pray.zone/v2/times/today.json?city=oujda")
  }
}
