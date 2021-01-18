import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantsService } from 'src/app/user/resturants.service';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-resturant-dashboard',
  templateUrl: './resturant-dashboard.component.html',
  styleUrls: ['./resturant-dashboard.component.css']
})
export class ResturantDashboardComponent implements OnInit {

  resturant: any;
  showForm: boolean;
  updateForm: boolean;
  user: any;
  reservations
  deliveries
  totalRservations
  confirmRservations
  newDeliveries
  confirmreservations
  confirmDeliveries
  newdeliveries
  newreservations
  confirmdeliveries
  reservationTotal = 0;
  deliveryTotal = 0;
  deliveryResult;
  reservationresult
  constructor(
    private service: ResturantsService,
    private userservice: UserdataService,
    private router: Router) { }



  ngOnInit(): void {

    this.resturant = this.service.resturant;
    this.service.getplacedReservations(this.resturant._id)
      .subscribe(
        respone => {
          this.newreservations = respone;
          console.log(this.reservations)
          this.totalRservations = this.newreservations.length
        }
      )

    this.service.confirmdReservation(this.resturant._id)
      .subscribe(
        respone => {
          this.confirmreservations = respone;
          console.log(this.reservations)
          this.confirmRservations = this.confirmreservations.length
        }
      )


    this.service.getnewDeliveryRequests(this.resturant._id)
      .subscribe(
        respone => {
          this.newdeliveries = respone;
          console.log(this.deliveries)
          this.newDeliveries = this.newdeliveries.length
        }
      )

    this.service.getconfirmDeliveries(this.resturant._id)
      .subscribe(
        respone => {
          this.confirmdeliveries = respone;
          console.log(this.deliveries)
          this.confirmDeliveries = this.confirmdeliveries.length
        }
      )
    this.service.completedReservation(this.resturant._id)
      .subscribe(
        respone => {
          this.reservationresult = respone;

          for (var i = 0; i < this.reservationresult.length; i++) {

            this.reservationTotal += this.reservationresult[i].totalBill;
            //  this.total = total

          } console.log("total icome " + this.reservationTotal)



        })
    this.service.getallDeliveries(this.resturant._id)
      .subscribe(
        respone => {
          this.deliveryResult = respone;

          for (var i = 0; i < this.deliveryResult.length; i++) {

            this.deliveryTotal += this.deliveryResult[i].totalBill;
            //  this.total = total

          } console.log("total icome " + this.deliveryTotal)



        })





  }

  form(resturant) {
    this.showForm = true;

    console.log(resturant);
  }

  getMenu(resturant) {

    this.service.getMenu(resturant._id)
      .subscribe(response => {
        this.service.menus = response;
        console.log(this.service.menus)
        this.router.navigate(['/resturantmenu'])
        //       this.router.navigate(['/resturantDashBoard'])


      })
  }
  update(resturant, f) {
    this.service.updateResturant(resturant, f.value)
      .subscribe(response => {
        console.log("befor" + response);
        this.resturant = response
        console.log("restratnt" + this.resturant);
      }
      )
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


}
