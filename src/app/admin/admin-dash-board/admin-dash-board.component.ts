import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Admin.service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {

  constructor(
    private service: AdminService,
  ) { }
  resturants

  allResturants   //Get All Resturant in response
  totalResturants //Number of resturants ^^^^
  allUsers
  totalUsers
  completedReservationDetail
  completedReservationNumber
  completedDeliveriesDetail
  completedDeliveriesNumber

  reservationTotal = 0
  deliveryTotal = 0
  totalRevenue

  approveResturant(id, a) {
    this.service.approveResturant(id, a)
      .subscribe(response => {
        alert("resturant is approved")
        console.log(response);
        //this.resturants = response
      })

  }
  ngOnInit(): void {

    //Get number of totall resturants

    this.service.getAllResturants()
      .subscribe(response => {
        this.allResturants = response
        this.totalResturants = this.allResturants.length
      })

    //Get number of totall Users
    this.service.getAllUsers()
      .subscribe(response => {
        this.allUsers = response
        this.totalUsers = this.allUsers.length
      })

    //  Get All completed Reservations  //
    this.service.getAllCompletedReservations()
      .subscribe(response => {
        this.completedReservationDetail = response
        this.completedReservationNumber = this.completedReservationDetail.length
        for (var i = 0; i < this.completedReservationNumber; i++) {
          this.reservationTotal += this.completedReservationDetail[i].totalBill
          console.log(this.reservationTotal)
        }

      })


    this.service.getAllCompletedDeliveries()
      .subscribe(response => {
        this.completedDeliveriesDetail = response
        this.completedDeliveriesNumber = this.completedDeliveriesDetail.length
        for (var i = 0; i < this.completedDeliveriesNumber; i++) {
          this.deliveryTotal += this.completedDeliveriesDetail[i].totalBill
        }
        this.totalRevenue = this.deliveryTotal + this.reservationTotal
        console.log("this is total revenue" + this.totalRevenue)


      })

  }
  get() {
    this.resturants = this.service.resturant;
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


}
