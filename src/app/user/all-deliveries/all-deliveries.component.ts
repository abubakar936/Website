import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';
import { ResturantsService } from '../resturants.service';

@Component({
  selector: 'app-all-deliveries',
  templateUrl: './all-deliveries.component.html',
  styleUrls: ['./all-deliveries.component.css']
})
export class AllDeliveriesComponent implements OnInit {


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
    this.userservice.getAllDeliveries(this.user._id)
      .subscribe(
        respone => {
          this.deliveries = respone;
          console.log(this.deliveries)
        }
      )


  }
  saveDelivery(f) {
    console.log(f)
    var delivery = this.userservice.saveDelivery
      (f, f.order, f.user.userId, f.resturant.resturantId, f.totalBill)
      .subscribe(
        response => {
          //   alert("De Successful");
          console.log("this response is coming from reservation api " + response)
        },
        error => {
          console.log('oops', error)
          alert("Error!!" + error.error)

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

  addReview(f) {

    this.userservice.addReview(
      this.orderDetail.resturant.resturantId
      , this.orderDetail.user.userId, f.value)
      .subscribe(
        response => {
          alert("Review  post successfully")
          console.log("this is add review" + response);

        }
      )
    //  console.log(f.value)
  }


}
