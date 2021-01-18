import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';
import { ResturantsService } from '../resturants.service';

@Component({
  selector: 'app-new-delivery-requests',
  templateUrl: './new-delivery-requests.component.html',
  styleUrls: ['./new-delivery-requests.component.css']
})
export class NewDeliveryRequestsComponent implements OnInit {
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
    this.userservice.getplacedDeliveries(this.user._id)
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
  rejectDelivery(orderDetaild, f) {
    // console.log(orderDetaild, + f)

    let Form = JSON.stringify(f.value);
    this.service.rejectDelivery(orderDetaild._id, Form)
      .subscribe(
        respone => {
          alert("You cencel the Delivery")
          console.log(respone);
        }
      )
  }



}





