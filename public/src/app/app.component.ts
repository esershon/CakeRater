import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //VARIABLES
  cakes:any;
  selectedCake:any;
  newCake:any;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.displayAllCakes();
    this.newCake={
      bakerName:"",
      imgUrl:"" 
    }
  }
  
  displayAllCakes(){
    this._httpService.getAllCakes().subscribe(cakes => {
      this.cakes = cakes;
    })
  }

  selectCake(mycake){
    this._httpService.getCake(mycake._id).subscribe(cake=>{
      this.selectedCake=cake;
    })
  }

  submitCake(){
    this._httpService.postCake(this.newCake).subscribe(cake=>{
      this.displayAllCakes();
      this.newCake={
        bakerName:"",
        imgUrl:"" 
      }    
    })
  }
}
