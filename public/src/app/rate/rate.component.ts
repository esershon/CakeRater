import { Component, OnInit, Input } from '@angular/core';
import{HttpService} from '../http.service'

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  @Input() toRateId: any;
  rating:any;

  constructor(private _httpService: HttpService) { 
    this.rating={
      content:"",
      stars:0
    }
  }

  ngOnInit() {}

  rateCake(){
    console.log("Calling rateCake function in rate.component.ts");
    this._httpService.rateCake(this.toRateId, this.rating).subscribe(cake=>{
      console.log(cake)
      // this.displayMyCake(this.selectedCake._id)
      // the idea of this was to update the displayed cake in case that's the one you just rated
    })
  }
}