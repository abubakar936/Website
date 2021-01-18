import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';
import { ResturantsService } from '../resturants.service';

@Component({
  selector: 'app-new-reservation-request',
  templateUrl: './new-reservation-request.component.html',
  styleUrls: ['./new-reservation-request.component.css']
})
export class NewReservationRequestComponent implements OnInit {
  constructor(
    private service: ResturantsService,
    private userservice: UserdataService

  ) { }
  resturant: any;
  user: any;
  reservations
  ngOnInit(): void {
    this.user = this.userservice.user
    this.resturant = this.service.resturant
    console.log(this.user, this.resturant)
    this.userservice.getplacedReservations(this.user._id)
      .subscribe(
        respone => {
          this.reservations = respone;
          console.log(this.reservations)
        }
      )


  }
  details(reservation) {
    //  console.log("details" + reservation);
  }
  reservationid;
  rejectReservation(f) {
    // console.log(this.reservationid, f.value);
    this.service.rejectReservation(this.reservationid, f.value)
      .subscribe(
        respone => {
          alert("Reason is  " + f)
          console.log(respone);
        }
      )

  }
}
