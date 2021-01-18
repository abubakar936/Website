import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Admin.service';
import { ResturantsService } from 'src/app/user/resturants.service';

@Component({
  selector: 'app-admin-delivery-resturants',
  templateUrl: './admin-delivery-resturants.component.html',
  styleUrls: ['./admin-delivery-resturants.component.css']
})
export class AdminDeliveryResturantsComponent implements OnInit {
  completedDeliveriesDetail
  completedDeliveriesNumber

  completedDeliveries
  totalIncome: number[] = [];

  constructor(
    private service: AdminService,
    private resturantService: ResturantsService
  ) { }
  resturants
  deliveryResult
  deliveryTotal: number[] = [];
  initialtotal = 0
  ngOnInit(): void {


    this.resturantService.getDeliveryResturant()
      .subscribe
      (
        response => {
          this.resturants = response;
          for (var i = 0; i < this.resturants.length; i++) {


            this.deliveryTotal.length = this.resturants.length;

            this.resturantService.getallDeliveries(this.resturants[i]._id)
              .subscribe(
                respone => {
                  this.deliveryResult = respone;
                  for (var j = 0; j < this.deliveryResult.length; j++) {
                    this.initialtotal += this.deliveryResult[j].totalBill;
                    this.deliveryTotal[i] = this.initialtotal;
                  }

                  this.initialtotal = 0;


                })
            console.log("total of resturant " + i + this.deliveryTotal[i])

          }
        }
      )
  }
}
