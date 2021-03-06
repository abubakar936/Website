import { Component, OnInit } from '@angular/core';
import { ResturantsService } from 'src/app/user/resturants.service';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-confirm-deliveries',
  templateUrl: './confirm-deliveries.component.html',
  styleUrls: ['./confirm-deliveries.component.css']
})
export class ConfirmDeliveriesComponent implements OnInit {



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

    this.service.getconfirmDeliveries(this.resturant._id)
      .subscribe(
        respone => {
          this.deliveries = respone;
          console.log(this.deliveries)
        }
      )


  }

  completedDelivery(id) {
    this.service.completedDelivery(id)
      .subscribe(
        respone => {
          alert("Delivery completed")
          console.log(respone);
        }
      )
  }
}