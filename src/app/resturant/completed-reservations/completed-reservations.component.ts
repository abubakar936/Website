import { Component, OnInit } from '@angular/core';
import { ResturantsService } from 'src/app/user/resturants.service';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-completed-reservations',
  templateUrl: './completed-reservations.component.html',
  styleUrls: ['./completed-reservations.component.css']
})
export class CompletedReservationsComponent implements OnInit {
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

    this.service.completedReservation(this.resturant._id)
      .subscribe(
        respone => {
          this.reservations = respone;
          console.log(this.reservations)
        }
      )

  }

}