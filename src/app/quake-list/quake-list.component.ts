import { Component, OnInit, EventEmitter } from '@angular/core';
import {Quake} from '../_models/quake';
import { QuakeService } from "../_services/quake.service";
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";


@Component({
  selector: 'quake-quake-list',
  templateUrl: './quake-list.component.html',
  styleUrls: ['./quake-list.component.css']
})
export class QuakeListComponent implements OnInit {
  public quakes: Quake[];
  public loading: boolean;

  constructor(private quakeService : QuakeService) {
    this.loading = true;
   }


  ngOnInit() {
    setTimeout(this.getQuakes(),5000);
    this.loading = false;
  }

  private getQuakes(){
    this.quakes = this.quakeService.getQuakes();
  }
}
