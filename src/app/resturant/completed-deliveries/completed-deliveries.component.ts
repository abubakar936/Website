import { Component, OnInit } from '@angular/core';
import { ResturantsService } from 'src/app/user/resturants.service';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-completed-deliveries',
  templateUrl: './completed-deliveries.component.html',
  styleUrls: ['./completed-deliveries.component.css']
})
export class CompletedDeliveriesComponent implements OnInit {


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

    this.service.getallDeliveries(this.resturant._id)
      .subscribe(
        respone => {

          this.deliveries = respone;
          console.log(this.deliveries)

        }
      )

  }
}
