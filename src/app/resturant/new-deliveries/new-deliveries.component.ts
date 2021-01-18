import { Component, OnInit } from '@angular/core';
import { ResturantsService } from 'src/app/user/resturants.service';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-new-deliveries',
  templateUrl: './new-deliveries.component.html',
  styleUrls: ['./new-deliveries.component.css']
})
export class NewDeliveriesComponent implements OnInit {


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

    this.service.getnewDeliveryRequests(this.resturant._id)
      .subscribe(
        respone => {
          this.deliveries = respone;
          console.log(this.deliveries)
        }
      )


  }

  confirmDelivery(reservationId) {
    this.service.confirmDelivery(reservationId)
      .subscribe(
        respone => {
          alert("Delivery confirmed")
          console.log(respone);
        }
      )
  }

  rejectDelivery(deliverieid, f) {
    //console.log(deliverieid + f)
    let Form = JSON.stringify(f.value);

    this.service.rejectDelivery(deliverieid, Form)
      .subscribe(
        respone => {
          alert(" Rejected !!! ")
          console.log(respone);
        }
      )

  }
  reservationdetails
  details(reservation) {
    this.reservationdetails = reservation

  }
}
