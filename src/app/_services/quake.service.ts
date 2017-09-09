import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { Quake } from "../_models/quake";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { QuakeDetail } from "../_models/quake-detail";

@Injectable()
export class QuakeService {
  private quakes: Quake[] = [];
  private quakeDetail: QuakeDetail = new QuakeDetail();
  private today: Date;
  private month:string;
  private day:string;

  private url : string;
  constructor(private http: HttpClient) {
    this.today = new Date();
    this.month = this.today.getMonth()+1<10 ? '0'+(this.today.getMonth()+1): (this.today.getMonth()+1).toString();
    this.day = this.today.getDate()<0 ? '0'+this.today.getDate(): (this.today.getDate()).toString();
    this.url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
   }

  public getQuakes(){
    this.url += `&starttime=${this.today.getFullYear()}-${this.month}-${this.day}&limit=50&minmagnitude=3.0`;
    this.http.get(this.url).forEach(itemArray => {
      itemArray['features'].forEach(item => {
         this.quakes.push(new Quake(item['id'],item['properties']['mag'],
                                item['properties']['title'],
                                item['properties']['place'],
                                item['properties']['magType'],
                                new Date(item['properties']['time']).toLocaleString(),
                                item['properties']['type']));
      });
    });
    return this.quakes;
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("Body Data = "+body);
    return body || [];
  }

  public getQuakeDetail(id:string){
    this.url += `&eventid=${id}`;
    let data;
    this.quakeDetail = new QuakeDetail();
    this.http.get(this.url).forEach(item =>{
      this.quakeDetail.id=item['id'];
      this.quakeDetail.magnitude =item['properties']['mag'];
      this.quakeDetail.title=item['properties']['title'];
      this.quakeDetail.place = item['properties']['place'];
      this.quakeDetail.magnitudeType =item['properties']['magType'],
      this.quakeDetail.time= new Date(item['properties']['time']).toLocaleString();
      this.quakeDetail.type = item['properties']['type'];
      this.quakeDetail.latitude = Number(item['properties']['products']['origin']['0']['properties']['latitude']);
      this.quakeDetail.longitude = Number(item['properties']['products']['origin']['0']['properties']['longitude']);
      this.quakeDetail.url =item['properties']['url'];
      console.log( item['properties']['products']['origin']['0']['properties']['latitude']);
    });
    return this.quakeDetail;
  }


}
