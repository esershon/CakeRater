import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mycake',
  templateUrl: './mycake.component.html',
  styleUrls: ['./mycake.component.css']
})
export class MycakeComponent implements OnInit {
  @Input() myCake: any;

  
  averageRating() {
    let sum = 0;
    for (let i = 0; i < this.myCake.ratings.length; i++) {
      sum = sum + this.myCake.ratings[i].stars
    }
    return (sum / this.myCake.ratings.length).toFixed(1);
  }

  constructor() { }

  ngOnInit() { }


}
