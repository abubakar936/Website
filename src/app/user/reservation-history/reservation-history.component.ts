import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';
import { ResturantsService } from '../resturants.service';

@Component({
  selector: 'app-reservation-history',
  templateUrl: './reservation-history.component.html',
  styleUrls: ['./reservation-history.component.css']
})
export class ReservationHistoryComponent implements OnInit {


  resturant: any;
  user: any;
  reservations

  constructor(
    private service: ResturantsService,
    private userservice: UserdataService

  ) { }


  ngOnInit(): void {
    this.user = this.userservice.user;
    this.resturant = this.service.resturant;

    this.userservice.getcompletedReservations(this.user._id)
      .subscribe(
        respone => {
          this.reservations = respone;
          console.log(this.reservations)
        }
      )


  }

  addReview(f) {

    this.userservice.addReview(
      this.resturant.resturantId
      , this.user.userId, f.value)
      .subscribe(
        response => {
          alert("Review  post successfully")
          console.log("this is add review" + response);

        }
      )
    //  console.log(f.value)
  }

}
