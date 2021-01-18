import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';
import { ResturantsService } from '../resturants.service';

@Component({
  selector: 'app-confirmedeliveries',
  templateUrl: './confirmedeliveries.component.html',
  styleUrls: ['./confirmedeliveries.component.css']
})
export class ConfirmedeliveriesComponent implements OnInit {

  constructor(
    private service: ResturantsService,
    private userservice: UserdataService

  ) { }
  resturant: any;
  user: any;
  deliveries
  ngOnInit(): void {
    this.user = this.userservice.user
    this.resturant = this.service.resturant
    console.log(this.user, this.resturant)
    this.userservice.getConfirmedDeliveries(this.user._id)
      .subscribe(
        respone => {
          this.deliveries = respone;
          console.log(this.deliveries)
        }
      )


  }
  detailForm: boolean
  orderDetail
  details(delivery) {
    this.detailForm = true;
    this.orderDetail = delivery
    console.log(this.orderDetail)
  }


}
