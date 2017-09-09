import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute, Params } from "@angular/router";
import { QuakeService } from "../_services/quake.service";
import { QuakeDetail } from "../_models/quake-detail";

@Component({
  selector: 'quake-quake-detail',
  templateUrl: './quake-detail.component.html',
  styleUrls: ['./quake-detail.component.css']
})
export class QuakeDetailComponent implements OnInit {
  private quakeDetail : QuakeDetail;
  private quakeId: string ='';

  constructor(private router:Router, private quakeService:QuakeService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:Params)=>{
      this.quakeId = params.params.id;
      this.quakeDetail = this.quakeService.getQuakeDetail(this.quakeId);
    });
  }

}
