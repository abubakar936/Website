import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';
import { ResturantsService } from '../resturants.service';

@Component({
  selector: 'app-confirmed-reservations',
  templateUrl: './confirmed-reservations.component.html',
  styleUrls: ['./confirmed-reservations.component.css']
})
export class ConfirmedReservationsComponent implements OnInit {


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
    this.userservice.getconfirmedReservations(this.user._id)
      .subscribe(
        respone => {
          this.reservations = respone;
          console.log(this.reservations)
        }
      )


  }
  details(reservation) {
    console.log(reservation);
  }
}
