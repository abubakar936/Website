import { Component, OnInit } from '@angular/core';
import { ResturantsService } from 'src/app/user/resturants.service';
import { UserdataService } from 'src/app/userdata.service';
import * as moment from "moment";
@Component({
  selector: 'app-new-reservation-requests',
  templateUrl: './new-reservation-requests.component.html',
  styleUrls: ['./new-reservation-requests.component.css']
})
export class NewReservationRequestsComponent implements OnInit {

  constructor(
    private service: ResturantsService,
    private userservice: UserdataService,

  ) { }
  ReservationDate
  resturant: any;
  user: any;
  reservations
  totalRservations
  ngOnInit(): void {
    this.user = this.userservice.user
    this.resturant = this.service.resturant

    this.service.getplacedReservations(this.resturant._id)
      .subscribe(
        respone => {
          this.reservations = respone;
          console.log(this.reservations)
          this.totalRservations = this.reservations.length
          console.log(this.reservations.dateOfReservation)
        }
      )



  }
  rejectReservation(reservationid, f) {
    // console.log(f)
    this.service.rejectReservation(reservationid, f)
      .subscribe(
        respone => {
          alert("Reason is  " + f)
          console.log(respone);
        }
      )

  }
  reservationdetails
  details(reservation) {
    this.reservationdetails = reservation

  }


  detailForm: boolean
  reservationDetail
  // rejectReaservation(reservation) {
  //   this.detailForm = true;
  //   this.reservationDetail = reservation
  //   console.log(this.reservationDetail)
  // }

  rejectionReason(f) {

    // this.userservice.addReview(
    //   this.orderDetail.resturant.resturantId
    //   , this.orderDetail.user.userId, f.value)
    //   .subscribe(
    //     response => {
    console.log("this is rejection reson" + f);



  }
  confirmReservation(reservationId) {
    this.service.confirmReservation(reservationId)
      .subscribe(
        respone => {
          alert("reservation confirmed")
          console.log(respone);
        }
      )
  }
  // rejectReservation(reservationId) {
  //   this.service.rejectReservation(reservationId)
  //     .subscribe(
  //       respone => {
  //         alert("reservation cencel")
  //         console.log(respone);
  //       }
  //     )
  // }
}

