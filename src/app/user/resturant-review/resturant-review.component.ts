import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from 'src/app/userdata.service';
import { ResturantsService } from '../resturants.service';

@Component({
  selector: 'app-resturant-review',
  templateUrl: './resturant-review.component.html',
  styleUrls: ['./resturant-review.component.css']
})
export class ResturantReviewComponent implements OnInit {

  resturant: any;
  resturantid
  constructor(
    private service: ResturantsService,
    private route: ActivatedRoute,
    private userService: UserdataService
  ) { }

  ngOnInit(): void {
    this.resturant = this.service.resturant
    console.log(this.resturant);

  }

}
