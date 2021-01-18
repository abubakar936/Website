import { Component, OnInit } from '@angular/core';
import { ResturantsService } from 'src/app/user/resturants.service';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-confirm-reservations',
  templateUrl: './confirm-reservations.component.html',
  styleUrls: ['./confirm-reservations.component.css']
})
export class ConfirmReservationsComponent implements OnInit {


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
    console.log(this.resturant)
    this.service.confirmdReservation(this.resturant._id)
      .subscribe(
        respone => {
          this.reservations = respone;
          console.log(this.reservations)
        }
      )

  }
  reservationdetails
  details(reservation) {
    this.reservationdetails = reservation
    console.log(reservation)

  }
  completeReservation(reservationId) {
    this.service.completeReservation(reservationId)
      .subscribe(
        respone => {
          alert("reservation completed")
          console.log(respone);
        }
      )
  }


}


